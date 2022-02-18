"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifytoken = exports.isAdmin = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _role = _interopRequireDefault(require("../models/role"));

var _user = _interopRequireDefault(require("./../models/user"));

var verifytoken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decoded, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers['authorization'];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: 'No token provided',
              status: 'error'
            }));

          case 4:
            decoded = _jsonwebtoken["default"].verify(token, process.env.secret_key);
            req.userID = decoded.id;
            _context.next = 8;
            return _user["default"].findById(req.userID, {
              password: 0
            });

          case 8:
            user = _context.sent;

            if (user) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'User not found',
              status: 'error'
            }));

          case 11:
            console.log(user);
            next();
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(400).json({
              message: _context.t0.message,
              status: 'error'
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function verifytoken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifytoken = verifytoken;

var isAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user, roles, i;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].findById(req.userID);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _role["default"].find({
              _id: {
                $in: user.role
              }
            });

          case 5:
            roles = _context2.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context2.next = 14;
              break;
            }

            if (!(roles[i].name === 'admin')) {
              _context2.next = 11;
              break;
            }

            next();
            return _context2.abrupt("return");

          case 11:
            i++;
            _context2.next = 7;
            break;

          case 14:
            return _context2.abrupt("return", res.status(400).json({
              message: 'User not authorized',
              status: 'error'
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;