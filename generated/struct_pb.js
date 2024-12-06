// source: struct.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.auth.DecimalValue', null, global);
goog.exportSymbol('proto.auth.NullableBool', null, global);
goog.exportSymbol('proto.auth.NullableBool.KindCase', null, global);
goog.exportSymbol('proto.auth.NullableString', null, global);
goog.exportSymbol('proto.auth.NullableString.KindCase', null, global);
goog.exportSymbol('proto.auth.NullableUInt64', null, global);
goog.exportSymbol('proto.auth.NullableUInt64.KindCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.auth.NullableString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.auth.NullableString.oneofGroups_);
};
goog.inherits(proto.auth.NullableString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.auth.NullableString.displayName = 'proto.auth.NullableString';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.auth.NullableUInt64 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.auth.NullableUInt64.oneofGroups_);
};
goog.inherits(proto.auth.NullableUInt64, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.auth.NullableUInt64.displayName = 'proto.auth.NullableUInt64';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.auth.NullableBool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.auth.NullableBool.oneofGroups_);
};
goog.inherits(proto.auth.NullableBool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.auth.NullableBool.displayName = 'proto.auth.NullableBool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.auth.DecimalValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.auth.DecimalValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.auth.DecimalValue.displayName = 'proto.auth.DecimalValue';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.auth.NullableString.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.auth.NullableString.KindCase = {
  KIND_NOT_SET: 0,
  NULL: 1,
  DATA: 2
};

/**
 * @return {proto.auth.NullableString.KindCase}
 */
proto.auth.NullableString.prototype.getKindCase = function() {
  return /** @type {proto.auth.NullableString.KindCase} */(jspb.Message.computeOneofCase(this, proto.auth.NullableString.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.auth.NullableString.prototype.toObject = function(opt_includeInstance) {
  return proto.auth.NullableString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.auth.NullableString} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.NullableString.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_null: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.auth.NullableString}
 */
proto.auth.NullableString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.auth.NullableString;
  return proto.auth.NullableString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.auth.NullableString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.auth.NullableString}
 */
proto.auth.NullableString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.NullValue} */ (reader.readEnum());
      msg.setNull(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.auth.NullableString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.auth.NullableString.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.auth.NullableString} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.NullableString.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.NullValue null = 1;
 * @return {!proto.google.protobuf.NullValue}
 */
proto.auth.NullableString.prototype.getNull = function() {
  return /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.protobuf.NullValue} value
 * @return {!proto.auth.NullableString} returns this
 */
proto.auth.NullableString.prototype.setNull = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.auth.NullableString.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.auth.NullableString} returns this
 */
proto.auth.NullableString.prototype.clearNull = function() {
  return jspb.Message.setOneofField(this, 1, proto.auth.NullableString.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.auth.NullableString.prototype.hasNull = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string data = 2;
 * @return {string}
 */
proto.auth.NullableString.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.auth.NullableString} returns this
 */
proto.auth.NullableString.prototype.setData = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.auth.NullableString.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.auth.NullableString} returns this
 */
proto.auth.NullableString.prototype.clearData = function() {
  return jspb.Message.setOneofField(this, 2, proto.auth.NullableString.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.auth.NullableString.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.auth.NullableUInt64.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.auth.NullableUInt64.KindCase = {
  KIND_NOT_SET: 0,
  NULL: 1,
  DATA: 2
};

/**
 * @return {proto.auth.NullableUInt64.KindCase}
 */
proto.auth.NullableUInt64.prototype.getKindCase = function() {
  return /** @type {proto.auth.NullableUInt64.KindCase} */(jspb.Message.computeOneofCase(this, proto.auth.NullableUInt64.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.auth.NullableUInt64.prototype.toObject = function(opt_includeInstance) {
  return proto.auth.NullableUInt64.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.auth.NullableUInt64} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.NullableUInt64.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_null: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.auth.NullableUInt64}
 */
proto.auth.NullableUInt64.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.auth.NullableUInt64;
  return proto.auth.NullableUInt64.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.auth.NullableUInt64} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.auth.NullableUInt64}
 */
proto.auth.NullableUInt64.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.NullValue} */ (reader.readEnum());
      msg.setNull(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.auth.NullableUInt64.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.auth.NullableUInt64.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.auth.NullableUInt64} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.NullableUInt64.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.NullValue null = 1;
 * @return {!proto.google.protobuf.NullValue}
 */
proto.auth.NullableUInt64.prototype.getNull = function() {
  return /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.protobuf.NullValue} value
 * @return {!proto.auth.NullableUInt64} returns this
 */
proto.auth.NullableUInt64.prototype.setNull = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.auth.NullableUInt64.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.auth.NullableUInt64} returns this
 */
proto.auth.NullableUInt64.prototype.clearNull = function() {
  return jspb.Message.setOneofField(this, 1, proto.auth.NullableUInt64.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.auth.NullableUInt64.prototype.hasNull = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 data = 2;
 * @return {number}
 */
proto.auth.NullableUInt64.prototype.getData = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.auth.NullableUInt64} returns this
 */
proto.auth.NullableUInt64.prototype.setData = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.auth.NullableUInt64.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.auth.NullableUInt64} returns this
 */
proto.auth.NullableUInt64.prototype.clearData = function() {
  return jspb.Message.setOneofField(this, 2, proto.auth.NullableUInt64.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.auth.NullableUInt64.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.auth.NullableBool.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.auth.NullableBool.KindCase = {
  KIND_NOT_SET: 0,
  NULL: 1,
  DATA: 2
};

/**
 * @return {proto.auth.NullableBool.KindCase}
 */
proto.auth.NullableBool.prototype.getKindCase = function() {
  return /** @type {proto.auth.NullableBool.KindCase} */(jspb.Message.computeOneofCase(this, proto.auth.NullableBool.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.auth.NullableBool.prototype.toObject = function(opt_includeInstance) {
  return proto.auth.NullableBool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.auth.NullableBool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.NullableBool.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_null: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.auth.NullableBool}
 */
proto.auth.NullableBool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.auth.NullableBool;
  return proto.auth.NullableBool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.auth.NullableBool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.auth.NullableBool}
 */
proto.auth.NullableBool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.NullValue} */ (reader.readEnum());
      msg.setNull(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.auth.NullableBool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.auth.NullableBool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.auth.NullableBool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.NullableBool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.NullValue null = 1;
 * @return {!proto.google.protobuf.NullValue}
 */
proto.auth.NullableBool.prototype.getNull = function() {
  return /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.protobuf.NullValue} value
 * @return {!proto.auth.NullableBool} returns this
 */
proto.auth.NullableBool.prototype.setNull = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.auth.NullableBool.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.auth.NullableBool} returns this
 */
proto.auth.NullableBool.prototype.clearNull = function() {
  return jspb.Message.setOneofField(this, 1, proto.auth.NullableBool.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.auth.NullableBool.prototype.hasNull = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool data = 2;
 * @return {boolean}
 */
proto.auth.NullableBool.prototype.getData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.auth.NullableBool} returns this
 */
proto.auth.NullableBool.prototype.setData = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.auth.NullableBool.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.auth.NullableBool} returns this
 */
proto.auth.NullableBool.prototype.clearData = function() {
  return jspb.Message.setOneofField(this, 2, proto.auth.NullableBool.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.auth.NullableBool.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.auth.DecimalValue.prototype.toObject = function(opt_includeInstance) {
  return proto.auth.DecimalValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.auth.DecimalValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.DecimalValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    scale: jspb.Message.getFieldWithDefault(msg, 1, 0),
    precision: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.auth.DecimalValue}
 */
proto.auth.DecimalValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.auth.DecimalValue;
  return proto.auth.DecimalValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.auth.DecimalValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.auth.DecimalValue}
 */
proto.auth.DecimalValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScale(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.auth.DecimalValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.auth.DecimalValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.auth.DecimalValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.DecimalValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScale();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPrecision();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint32 scale = 1;
 * @return {number}
 */
proto.auth.DecimalValue.prototype.getScale = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.auth.DecimalValue} returns this
 */
proto.auth.DecimalValue.prototype.setScale = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 precision = 2;
 * @return {number}
 */
proto.auth.DecimalValue.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.auth.DecimalValue} returns this
 */
proto.auth.DecimalValue.prototype.setPrecision = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes value = 3;
 * @return {!(string|Uint8Array)}
 */
proto.auth.DecimalValue.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes value = 3;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.auth.DecimalValue.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.auth.DecimalValue.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.auth.DecimalValue} returns this
 */
proto.auth.DecimalValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


goog.object.extend(exports, proto.auth);
