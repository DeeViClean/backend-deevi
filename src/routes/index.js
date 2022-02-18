"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var user = require('./../models/user');

var jwt = require('jsonwebtoken');

var dotenv = require('dotenv').config();

router.get('/', function (req, res) {
  res.json({
    message: 'Welcome to the API of Deevy',
    status: 'success',
    author: 'Bryan Herrera',
    girhub: 'https://github.com/Bryan-Herrera-DEV/'
  });
});
router.post('/register', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, userN, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            userN = new user({
              email: email,
              password: password
            });
            _context.next = 4;
            return userN.save();

          case 4:
            token = jwt.sign({
              _id: userN._id
            }, process.env.secret_key);
            res.status(200).json({
              token: token
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/login', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, userN, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 3;
            return user.findOne({
              email: email
            });

          case 3:
            userN = _context2.sent;

            if (userN) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(401).send('Invalid email or password'));

          case 6:
            if (!(userN.password !== password)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(401).send('Invalid email or password'));

          case 8:
            token = jwt.sign({
              _id: userN._id
            }, process.env.secret_key);
            res.status(200).json({
              token: token
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = router;