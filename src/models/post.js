"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var roleSchema = new _mongoose.Schema({
  titulo: String,
  url_image: String,
  fecha: String,
  descripcion: Array
}, {
  timestamps: false,
  versionKey: false
});

var _default = (0, _mongoose.model)('Post', roleSchema);

exports["default"] = _default;