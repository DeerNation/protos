
/**
 *
 * LinkMetadata class generated from protobuf definition "model.proto".
 * auto-generated code PLEASE DO NOT EDIT!
 * 
 */
qx.Class.define('proto.dn.model.LinkMetadata', {
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
      f = message.getId()
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        )
      }
      f = message.getMeta()
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        )
      }
      f = message.getFetched()
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
     * @return {proto.dn.model.LinkMetadata}
     */
    deserializeBinary: function (bytes) {
      var reader = new jspb.BinaryReader(bytes)
      var msg = new proto.dn.model.LinkMetadata()
      return proto.dn.model.LinkMetadata.deserializeBinaryFromReader(msg, reader)
    },

    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param msg {proto.dn.model.LinkMetadata} The message object to deserialize into.
     * @param reader {jspb.BinaryReader} The BinaryReader to use.
     * @return {proto.dn.model.LinkMetadata}
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
            msg.setId(value)
            break
          case 3:
            value = reader.readString()
            msg.setMeta(value)
            break
          case 4:
            value = reader.readString()
            msg.setFetched(value)
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

    id: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeId'
    },

    meta: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeMeta'
    },

    fetched: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeFetched'
    }
  }
})
