
/**
 * Model class generated from protobuf definition "protos/api.proto".
 *
 * auto-generated code PLEASE DO NOT EDIT!
 */
qx.Class.define('proto.dn.Model', {
  extend: proto.core.BaseMessage,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  construct: function (props) {
    this.initActors(new qx.data.Array())
    this.initPublicChannels(new qx.data.Array())
    this.base(arguments, props)
  },

  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics: {
    /**
     * Serializes the given message to binary data (in protobuf wire
     * format), writing to the given BinaryWriter.
     * @param message {proto.core.BaseMessage}
     * @param writer {jspb.BinaryWriter}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    serializeBinaryToWriter: function (message, writer) {
      var f = message.getMe()
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.dn.model.Actor.serializeBinaryToWriter
        )
      }
      f = message.getActors().toArray()
      if (f != null) {
        writer.writeRepeatedMessage(
          2,
          f,
          proto.dn.model.Actor.serializeBinaryToWriter
        )
      }
      f = message.getPublicChannels().toArray()
      if (f != null) {
        writer.writeRepeatedMessage(
          4,
          f,
          proto.dn.model.Channel.serializeBinaryToWriter
        )
      }
    },

    /**
     * Deserializes binary data (in protobuf wire format).
     * @param bytes {jspb.ByteSource} The bytes to deserialize.
     * @return {proto.dn.Model}
     */
    deserializeBinary: function (bytes) {
      var reader = new jspb.BinaryReader(bytes)
      var msg = new proto.dn.Model()
      return proto.dn.Model.deserializeBinaryFromReader(msg, reader)
    },

    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param msg {proto.dn.Model} The message object to deserialize into.
     * @param reader {jspb.BinaryReader} The BinaryReader to use.
     * @return {proto.dn.Model}
     */
    deserializeBinaryFromReader: function (msg, reader) {
      msg.setDeserialized(true)
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break
        }
        var value
        var field = reader.getFieldNumber()
        switch (field) {
          case 1:
            value = new proto.dn.model.Actor()
            reader.readMessage(value, proto.dn.model.Actor.deserializeBinaryFromReader)
            msg.setMe(value)
            break
          case 2:
            value = new proto.dn.model.Actor()
            reader.readMessage(value, proto.dn.model.Actor.deserializeBinaryFromReader)
            msg.getActors().push(value)
            break
          case 4:
            value = new proto.dn.model.Channel()
            reader.readMessage(value, proto.dn.model.Channel.deserializeBinaryFromReader)
            msg.getPublicChannels().push(value)
            break
          default:
            reader.skipField()
            break
        }
      }
      return msg
    }
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  properties: {

    me: {
      check: 'proto.dn.model.Actor',
      init: null,
      nullable: true,
      event: 'changeMe'
    },

    /**
     * @type {qx.data.Array} array of {@link proto.dn.model.Actor}
     */
    actors: {
      check: 'qx.data.Array',
      deferredInit: true,
      event: 'changeActors'
    },

    /**
     * @type {qx.data.Array} array of {@link proto.dn.model.Channel}
     */
    publicChannels: {
      check: 'qx.data.Array',
      deferredInit: true,
      event: 'changePublicChannels'
    }
  }
})