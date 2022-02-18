"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add_email_to_newsletter = void 0;

var _email = require("./email.controller");

//READ XLSX FILE
var xlsx = require('read-excel-file/node');

xlsx('./base.xlsx').then(function (rows) {
  console.log(rows);
});

var add_email_to_newsletter = function add_email_to_newsletter(req, res) {
  return regeneratorRuntime.async(function add_email_to_newsletter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.add_email_to_newsletter = add_email_to_newsletter;