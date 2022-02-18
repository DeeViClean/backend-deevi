"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_precios = exports.update_comentario = exports.updateUser = exports.get_precios = exports.get_comentarios = exports.getUsers = exports.getUserById = exports.getComments = exports.delete_comentario = exports.deleteUser = exports.create_comentario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("./../models/user"));

var _precios = _interopRequireDefault(require("../models/precios"));

var _comentario = _interopRequireDefault(require("../models/comentario"));

var _role = _interopRequireDefault(require("./../models/role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var getUserById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].findById(req.params.id);

          case 3:
            user = _context.sent;
            console.log(user);

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'User not found',
              status: 'errora'
            }));

          case 7:
            res.status(200).json(user);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(400).json({
              message: _context.t0.message,
              status: 'error'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUserById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var updateUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _updateUser;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 3:
            _updateUser = _context2.sent;
            res.status(200).json(_updateUser);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              message: _context2.t0.message,
              status: 'error'
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function updateUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var getComments = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user, comment, index, dataPush;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _user["default"].find();

          case 3:
            user = _context3.sent;
            comment = [];

            if (user) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: 'User not found',
              status: 'errora'
            }));

          case 7:
            for (index = 0; index < user.length; index++) {
              if (user[index].Comment[0] != undefined) {
                dataPush = {
                  name: user[index].name,
                  comment: user[index].Comment
                };
                comment.push(dataPush);
              }
            }

            res.status(200).json(comment);
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json({
              message: _context3.t0.message,
              status: 'error'
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getComments(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //rutas amdin


exports.getComments = getComments;

var getUsers = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _user["default"].find();

          case 3:
            users = _context4.sent;
            res.status(200).json(users);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(400).json({
              message: _context4.t0.message,
              status: 'error'
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getUsers(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user["default"].findByIdAndDelete(req.params.id);

          case 3:
            res.status(200).json({
              message: 'User deleted',
              status: 'success'
            });
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            res.status(400).json({
              message: _context5.t0.message,
              status: 'error'
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var get_precios = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var prcios;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _precios["default"].find();

          case 3:
            prcios = _context6.sent;
            res.status(200).json(prcios);
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            res.status(400).json({
              message: _context6.t0.message,
              status: 'error'
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function get_precios(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.get_precios = get_precios;

var update_precios = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var prcios;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _precios["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 3:
            prcios = _context7.sent;
            res.status(200).json(prcios);
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            res.status(400).json({
              message: _context7.t0.message,
              status: 'error'
            });

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function update_precios(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.update_precios = update_precios;

var delete_comentario = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _comentario["default"].findByIdAndDelete(req.params.id);

          case 3:
            res.status(200).json({
              message: 'User deleted',
              status: 'success'
            });
            _context8.next = 9;
            break;

          case 6:
            _context8.prev = 6;
            _context8.t0 = _context8["catch"](0);
            res.status(400).json({
              message: _context8.t0.message,
              status: 'error'
            });

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 6]]);
  }));

  return function delete_comentario(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.delete_comentario = delete_comentario;

var get_comentarios = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var comentario_;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _comentario["default"].find();

          case 3:
            comentario_ = _context9.sent;
            res.status(200).json(comentario_);
            _context9.next = 10;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            res.status(400).json({
              message: _context9.t0.message,
              status: 'error'
            });

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 7]]);
  }));

  return function get_comentarios(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.get_comentarios = get_comentarios;

var update_comentario = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var comentario_;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _comentario["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 3:
            comentario_ = _context10.sent;
            res.status(200).json(comentario_);
            _context10.next = 10;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            res.status(400).json({
              message: _context10.t0.message,
              status: 'error'
            });

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 7]]);
  }));

  return function update_comentario(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.update_comentario = update_comentario;

var create_comentario = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var comentario_;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _comentario["default"].create(req.body);

          case 3:
            comentario_ = _context11.sent;
            res.status(200).json(comentario_);
            _context11.next = 10;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            res.status(400).json({
              message: _context11.t0.message,
              status: 'error'
            });

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 7]]);
  }));

  return function create_comentario(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.create_comentario = create_comentario;