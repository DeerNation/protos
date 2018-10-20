
/**
 *
 * PayloadFilter class generated from protobuf definition "api.proto".
 * auto-generated code PLEASE DO NOT EDIT!
 * 
 */
qx.Class.define('proto.dn.PayloadFilter', {
  extend: proto.core.BaseMessage,

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
      var f = message.getType()
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        )
      }
      f = message.getFromDate()
      f = f instanceof Date ? f.toISOString() : ''
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        )
      }
      f = message.getToDate()
      f = f instanceof Date ? f.toISOString() : ''
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        )
      }
    },

    /**
     * Deserializes binary data (in protobuf wire format).
     * @param bytes {jspb.ByteSource} The bytes to deserialize.
     * @return {proto.dn.PayloadFilter}
     */
    deserializeBinary: function (bytes) {
      var reader = new jspb.BinaryReader(bytes)
      var msg = new proto.dn.PayloadFilter()
      return proto.dn.PayloadFilter.deserializeBinaryFromReader(msg, reader)
    },

    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param msg {proto.dn.PayloadFilter} The message object to deserialize into.
     * @param reader {jspb.BinaryReader} The BinaryReader to use.
     * @return {proto.dn.PayloadFilter}
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
            msg.setType(value)
            break
          case 2:
            value = reader.readString()
            msg.setFromDate(value)
            break
          case 3:
            value = reader.readString()
            msg.setToDate(value)
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

    type: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeType'
    },

    fromDate: {
      check: 'Date',
      init: null,
      nullable: true,
      event: 'changeFromDate',
      transform: '_toDate'
    },

    toDate: {
      check: 'Date',
      init: null,
      nullable: true,
      event: 'changeToDate',
      transform: '_toDate'
    }
  }
})
