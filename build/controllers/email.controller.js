"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var email = {
  user: 'asepsis.deep@gmail.com',
  pass: '=DeeViClean=175598'
};

var transporter = _nodemailer["default"].createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  // true for 465, false for other ports
  auth: {
    user: 'asepsis.deep@gmail.com',
    // generated ethereal user
    pass: 'wwquuszvbdtawbgn' // generated ethereal password

  }
});

exports.transporter = transporter;
transporter.verify().then(function () {
  console.log('Server is ready to take our messages');
});