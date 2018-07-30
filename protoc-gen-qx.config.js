module.exports = {
  service: {
    '*': {
      extend: 'app.api.BaseService',
      include: [],
      implement: []
    }
  },
  messageType: {
    '/proto.dn.model.*/': {
      include: ['app.api.MUpdate']
    },
    'proto.dn.model.Channel': {
      include: ['app.api.MChannel', 'app.api.MUpdate']
    },
    'proto.dn.model.Subscription': {
      include: ['app.api.MSubscription', 'app.api.MUpdate', 'app.api.MPersist']
    },
    'proto.dn.model.Actor': {
      include: ['app.api.MActor', 'app.api.MUpdate', 'app.api.MPersist']
    }
  },
  skipDeps: ['grpc-web-client.js'],
  skipDepLoadingFallback: true,
  withoutSemi: true,
  repeatedClass: 'app.api.Array',
  require: ['node_modules/protoc-gen-qx/extensions_pb']
}
