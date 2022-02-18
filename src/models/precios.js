"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var roleSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  valores: {
    type: Array
  }
}, {
  timestamps: false,
  versionKey: false
});

var _default = (0, _mongoose.model)('Precios', roleSchema);

exports["default"] = _default;