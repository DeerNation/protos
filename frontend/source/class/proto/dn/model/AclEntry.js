
/**
 *
 * AclEntry class generated from protobuf definition "model.proto".
 * auto-generated code PLEASE DO NOT EDIT!
 * 
 */
qx.Class.define('proto.dn.model.AclEntry', {
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
      var f = message.getTopic()
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        )
      }
      f = message.getActions()
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        )
      }
      f = message.getMemberActions()
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        )
      }
      f = message.getOwnerActions()
      if (f.length > 0) {
        writer.writeString(
          4,
          f
        )
      }
      f = message.getRoleTarget()
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          proto.dn.model.ACLRole.serializeBinaryToWriter
        )
      }
    },

    /**
     * Deserializes binary data (in protobuf wire format).
     * @param bytes {jspb.ByteSource} The bytes to deserialize.
     * @return {proto.dn.model.AclEntry}
     */
    deserializeBinary: function (bytes) {
      var reader = new jspb.BinaryReader(bytes)
      var msg = new proto.dn.model.AclEntry()
      return proto.dn.model.AclEntry.deserializeBinaryFromReader(msg, reader)
    },

    /**
     * Deserializes binary data (in protobuf wire format) from the
     * given reader into the given message object.
     * @param msg {proto.dn.model.AclEntry} The message object to deserialize into.
     * @param reader {jspb.BinaryReader} The BinaryReader to use.
     * @return {proto.dn.model.AclEntry}
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
            msg.setTopic(value)
            break
          case 2:
            value = reader.readString()
            msg.setActions(value)
            break
          case 3:
            value = reader.readString()
            msg.setMemberActions(value)
            break
          case 4:
            value = reader.readString()
            msg.setOwnerActions(value)
            break
          case 5:
            value = new proto.dn.model.ACLRole()
            reader.readMessage(value, proto.dn.model.ACLRole.deserializeBinaryFromReader)
            msg.setRoleTarget(value)
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

    topic: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeTopic'
    },

    actions: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeActions'
    },

    memberActions: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeMemberActions'
    },

    ownerActions: {
      check: 'String',
      init: '',
      nullable: false,
      event: 'changeOwnerActions'
    },

    roleTarget: {
      check: 'proto.dn.model.ACLRole',
      init: null,
      nullable: true,
      event: 'changeRoleTarget'
    }
  }
})
