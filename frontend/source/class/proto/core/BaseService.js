qx.Class.define('proto.core.BaseService', {
  extend: qx.core.Object,
  type: 'abstract',

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  construct: function (url, metadata) {
    this.base(arguments)
    this.setUrl(url)

    if (metadata) {
      this.setMetadata(metadata)
    }

    this.__postRpcHooks = {}
  },

  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics: {
    __grpcErrorHandlers: {},

    /**
     * Register an error handler for a specified GRPC error code.
     * The handler will be called when an GRPC-RPC response returned that code 
     * like this handler(errorCode, errorMessage)
     * @param errorCode {Number} grpc error code
     * @param handler {Function} callback that should be executed in error case 
     * @param context {Object} context of the callback
     */
    registerGrpcErrorHandler: function (errorCode, handler, context) {
      this.__grpcErrorHandlers[errorCode] = {
        callback: handler,
        context: context || this
      }
    },

    /**
     * Unregister an error handler for a specified GRPC error code.
     * @param errorCode {Number} grpc error code
     */
    unregisterGrpcErrorHandler: function (errorCode) {
      delete this.__grpcErrorHandlers[errorCode]
    },

    /**
     * Get an error handler for a specified GRPC error code.
     * @param errorCode {Number} grpc error code
     * @return {Map|null}
     */
    getErrorHandler: function (errorCode) {
      return this.__grpcErrorHandlers[errorCode]
    }
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  properties: {
    url: {
      check: 'String',
      init: 'null'
    },

    metadata: {
      check: 'Object',
      nullable: true,
      apply: '_applyMetadata'
    }
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members: {
    __metadata: null,
    __postRpcHooks: null,

    addPostRpcHook: function (rpcMethod, callback, context) {
      this.__postRpcHooks[rpcMethod] = [callback, context]
    },

    removePostRpcHook: function (rpcMethod) {
      delete this.__postRpcHooks[rpcMethod]
    },

    _applyMetadata: function (value) {
      if (value) {
        this.__metadata = new grpc.Metadata(value)
      } else {
        this.__metadata = null
      }
    },

    _call: function (payload, serviceDefinition) {
      var args = qx.lang.Array.fromArguments(arguments, 2)
      var config = {
        request: payload,
        host: this.getUrl(),
        metadata: this.__metadata
        // debug: qx.core.Environment.get('qx.debug')
      }
      var context = self = this
      if (typeof args[args.length - 1] === 'object') {
        context = args.pop()
      }
      return new qx.Promise(function (resolve, reject) {
        if (serviceDefinition.responseStream === true) {
          // streaming response
          
          var callback
          if (typeof args[args.length - 1] === 'function') {
            callback = args.pop()
          } else {
            throw Error('no callback defined')
          }
          if (config.request === callback) {
            throw Error('no payload defined')
          }
          var onMessageCallback = callback.bind(context)
          if (self.__postRpcHooks.hasOwnProperty(serviceDefinition.methodName)) {
            onMessageCallback = function (message) {
              var entry = self.__postRpcHooks[serviceDefinition.methodName]
              message = entry[0].call(entry[1], message)
              callback.call(context, message)
            }
          }
          grpc.invoke(serviceDefinition, Object.assign(config, {
            onMessage: onMessageCallback,
            onEnd: function (code, message, trailers) {
              if (code !== grpc.Code.OK) {
                var errorHandler = proto.core.BaseService.getErrorHandler(code)
                if (errorHandler) {
                  errorHandler.callback.call(errorHandler.context, code, message)
                  reject()
                } else {
                  reject(new Error(message))
                }
              }
              else {
                resolve(message)
              }
            },
            debug: false
          }))
        }
        else {
          grpc.unary(serviceDefinition, Object.assign(config, {
            onEnd: function (res) {
              if (res.status !== grpc.Code.OK) {
                var errorHandler = proto.core.BaseService.getErrorHandler(res.status)
                if (errorHandler) {
                  errorHandler.callback.call(errorHandler.context, res.status, res.statusMessage)
                  reject()
                } else {
                  reject(new Error('RPC ' + serviceDefinition.methodName + ' returned an error: ' + res.statusMessage))
                }
              }
              else {
                if (self.__postRpcHooks.hasOwnProperty(serviceDefinition.methodName)) {
                  var entry = self.__postRpcHooks[serviceDefinition.methodName]
                  res.message = entry[0].call(entry[1], res.message)
                }
                resolve(res.message)
              }
            },
            debug: false
          }))
        }
      }, context)
    }
  }
})