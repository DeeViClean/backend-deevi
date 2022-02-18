"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoose$connect;

var dotenv = require('dotenv').config();

_mongoose["default"].connect(process.env.mongo_db, (_mongoose$connect = {
  useNewUrlParser: true
}, (0, _defineProperty2["default"])(_mongoose$connect, "useNewUrlParser", true), (0, _defineProperty2["default"])(_mongoose$connect, "useUnifiedTopology", true), _mongoose$connect)).then(function (db) {
  return console.log('Database conenct');
})["catch"](function (err) {
  return console.log(err);
});