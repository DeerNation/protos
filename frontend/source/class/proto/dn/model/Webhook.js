
/**
 *
 * Webhook class generated from protobuf definition "model.proto".
 * auto-generated code PLEASE DO NOT EDIT!
 * 
 */
qx.Class.define('proto.dn.model.Webhook', {
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
      f = message.getIdentifier()
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        )
      }
      f = message.getSecret()
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        )
      }
      f = message.getName()
      if (f.length > 0) {
        writer.writeString(
          4,
          f
        )
      }
      f = message.getChannel()
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          proto.dn.model.Channel.serializeBinaryToWriter
        )
      }
      f = message.getActor()
      if (f != null) {
        writer.writeMessage(
          6,
          f,
          proto.dn.model.Actor.serializeBinaryToWriter
        )
      }
    },

    /**
     * Deserializes binary data (in protobuf wire format).
     * @param bytes {jspb.ByteSource} The bytes to deserialize.
     * @return {proto.dn.model.Webhook}
     */
    deserializeBinary: function (bytes) {
      var reader = new jspb.BinaryReader(bytes)
      var msg = new proto.dn.model.Webhook()
      return proto.dn.model.Webhook.deserializeBinaryFromReader(msg, reader)
    },

    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param msg {proto.dn.model.Webhook} The message object to deserialize into.
     * @param reader {jspb.BinaryReader} The BinaryReader to use.
     * @return {proto.dn.model.Webhook}
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
            msg.setIdentifier(value)
            break
          case 3:
            value = reader.readString()
            msg.setSecret(value)
            break
          case 4:
            value = reader.readString()
            msg.setName(value)
            break
          case 5:
            value = new proto.dn.model.Channel()
            reader.readMessage(value, proto.dn.model.Channel.deserializeBinaryFromReader)
            msg.setChannel(value)
            break
          case 6:
            value = new proto.dn.model.Actor()
            reader.readMessage(value, proto.dn.model.Actor.deserializeBinaryFromReader)
            msg.setActor(value)
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

    identifier: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeIdentifier'
    },

    secret: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeSecret'
    },

    name: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeName'
    },

    channel: {
      check: 'proto.dn.model.Channel',
      init: null,
      nullable: true,
      event: 'changeChannel'
    },

    actor: {
      check: 'proto.dn.model.Actor',
      init: null,
      nullable: true,
      event: 'changeActor'
    }
  }
})
