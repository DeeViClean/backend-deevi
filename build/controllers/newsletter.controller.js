"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add_email_to_newsletter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _email = require("./email.controller");

/* 


asilva@constructum-ec.com	SILVA VINUEZA ALEX RENATO
melidalopez31@yahoo.com	GOMEZ LOPEZ MELIDA ALEJANDRA
fichiec@gmail.com	CORNEJO LEON RODRIGO FERNANDO
sandraeme64@hotmail.com	MUÑOZ RUIZ SANDRA GRICELL
m_andresmorilo@hotmail.com	MORILLO ORTIZ MARIA EMILIA
neljacintopadilla@hotmail.com	PADILLA HEREDIA NELSON JACINTO
cristinabayas@hotmail.com	BAYAS SALTOS MARIA CRISTINA

*/
// pass emails to list
var newsletter_list = ["asilva@constructum-ec.com", "melidalopez31@yahoo.es"];

var add_email_to_newsletter = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function add_email_to_newsletter(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.add_email_to_newsletter = add_email_to_newsletter;