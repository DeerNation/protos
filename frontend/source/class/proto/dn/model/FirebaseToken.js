
/**
 * Only used internally, not send to clients
 * FirebaseToken class generated from protobuf definition "model.proto".
 * auto-generated code PLEASE DO NOT EDIT!
 * 
 */
qx.Class.define('proto.dn.model.FirebaseToken', {
  extend: proto.core.BaseMessage,
  include: [app.api.MUpdate],

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
     */
    serializeBinaryToWriter: function (message, writer) {
      var f = message.getUid()
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        )
      }
      f = message.getTokenId()
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        )
      }
      f = message.getActor()
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.dn.model.Actor.serializeBinaryToWriter
        )
      }
      f = message.getInfo()
      if (f.length > 0) {
        writer.writeString(
          4,
          f
        )
      }
    },

    /**
     * Deserializes binary data (in protobuf wire format).
     * @param bytes {jspb.ByteSource} The bytes to deserialize.
     * @return {proto.dn.model.FirebaseToken}
     */
    deserializeBinary: function (bytes) {
      var reader = new jspb.BinaryReader(bytes)
      var msg = new proto.dn.model.FirebaseToken()
      return proto.dn.model.FirebaseToken.deserializeBinaryFromReader(msg, reader)
    },

    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param msg {proto.dn.model.FirebaseToken} The message object to deserialize into.
     * @param reader {jspb.BinaryReader} The BinaryReader to use.
     * @return {proto.dn.model.FirebaseToken}
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
            value = reader.readString()
            msg.setUid(value)
            break
          case 2:
            value = reader.readString()
            msg.setTokenId(value)
            break
          case 3:
            value = new proto.dn.model.Actor()
            reader.readMessage(value, proto.dn.model.Actor.deserializeBinaryFromReader)
            msg.setActor(value)
            break
          case 4:
            value = reader.readString()
            msg.setInfo(value)
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

    uid: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeUid'
    },

    tokenId: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeTokenId'
    },

    actor: {
      check: 'proto.dn.model.Actor',
      init: null,
      nullable: true,
      event: 'changeActor'
    },

    info: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeInfo'
    }
  }
})
