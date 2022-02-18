"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  calle_uno: {
    type: String
  },
  calle_dos: {
    type: String
  },
  codigo_postal: {
    type: Number
  },
  telefono: {
    type: String
  },
  horario: {
    type: String
  },
  servicio: {
    type: Array
  },
  role: [{
    role: 'role',
    type: _mongoose.Schema.Types.ObjectId
  }],
  Comment: [{
    type: Array
  }]
}, {
  timestamps: true,
  versionKey: false
});

userSchema.statics.encryptPassword = function _callee(password) {
  var salt;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].genSalt(10));

        case 2:
          salt = _context.sent;
          return _context.abrupt("return", _bcryptjs["default"].hash(password, salt));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

userSchema.statics.comparePassword = function _callee2(password, comparPassword) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(password, comparPassword));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;