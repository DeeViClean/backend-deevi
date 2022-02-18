"use strict";

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault2(require("@babel/runtime/regenerator"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = void 0;

var _user = _interopRequireDefault(require("./../models/user"));

var _role = _interopRequireDefault(require("./../models/role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _email = require("./email.controller");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var signUp = function signUp(req, res) {
  var _req$body, name, email, password, calle_uno, calle_dos, telefono, horario, codigo_postal, servicio, role, newUser, found, founda, savedUser, token, template;

  return _regenerator["default"].async(function signUp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, calle_uno = _req$body.calle_uno, calle_dos = _req$body.calle_dos, telefono = _req$body.telefono, horario = _req$body.horario, codigo_postal = _req$body.codigo_postal, servicio = _req$body.servicio, role = _req$body.role;
          _context.t0 = _user["default"];
          _context.t1 = name;
          _context.t2 = email;
          _context.next = 7;
          return _regenerator["default"].awrap(_user["default"].encryptPassword(password));

        case 7:
          _context.t3 = _context.sent;
          _context.t4 = calle_uno;
          _context.t5 = calle_dos;
          _context.t6 = telefono;
          _context.t7 = horario;
          _context.t8 = codigo_postal;
          _context.t9 = servicio;
          _context.t10 = {
            name: _context.t1,
            email: _context.t2,
            password: _context.t3,
            calle_uno: _context.t4,
            calle_dos: _context.t5,
            telefono: _context.t6,
            horario: _context.t7,
            codigo_postal: _context.t8,
            servicio: _context.t9
          };
          newUser = new _context.t0(_context.t10);

          if (!role) {
            _context.next = 23;
            break;
          }

          _context.next = 19;
          return _regenerator["default"].awrap(_role["default"].find({
            name: {
              $in: role
            }
          }));

        case 19:
          found = _context.sent;
          newUser.role = found.map(function (r) {
            return r._id;
          });
          _context.next = 27;
          break;

        case 23:
          _context.next = 25;
          return _regenerator["default"].awrap(_role["default"].findOne({
            name: "user"
          }));

        case 25:
          founda = _context.sent;
          newUser.role = [founda._id];

        case 27:
          _context.next = 29;
          return _regenerator["default"].awrap(newUser.save());

        case 29:
          savedUser = _context.sent;
          console.log(savedUser.email);
          token = _jsonwebtoken["default"].sign({
            id: savedUser._id
          }, process.env.secret_key);
          _context.prev = 32;
          template = {
            from: "DeeViClean <asepsis.deep@gmail.com>",
            to: savedUser.email,
            subject: "Bienvenido a DeeviClean, Gracias por elegirnos",
            html: "\n                \n <!DOCTYPE html>\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n\t<meta name=\"x-apple-disable-message-reformatting\">\n\t<title>Bitexblock</title>\n\t<!--[if mso]>\n\t<noscript>\n\t\t<xml>\n\t\t\t<o:OfficeDocumentSettings>\n\t\t\t\t<o:PixelsPerInch>96</o:PixelsPerInch>\n\t\t\t</o:OfficeDocumentSettings>\n\t\t</xml>\n\t</noscript>\n\t<![endif]-->\n\t<style>\n\t\ttable, td, div, h1, p {font-family: Arial, sans-serif;}\n\t</style>\n</head>\n<body style=\"margin:0;padding:0;\">\n\t<table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;\">\n\t\t<tr>\n\t\t\t<td align=\"center\" style=\"padding:0;\">\n\t\t\t\t<table role=\"presentation\" style=\"width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td align=\"center\" style=\"padding:40px 0 30px 0;background:#0d0d0d;\">\n\t\t\t\t\t\t\t<img src=\"https://raw.githubusercontent.com/Bryan-Herrera-DEV/example_middlewares_y_rutas/main/images_para_proyectos/LogoSinFondo.png?token=GHSAT0AAAAAABQ4SO7XYHVX3ZF7PY3JOR5CYPSZJUQ\" alt=\"\" width=\"300\" style=\"height:auto;display:block;\" />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"padding:36px 30px 42px 30px;\">\n\t\t\t\t\t\t\t<table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"padding:0 0 36px 0;color:#153643;\">\n\t\t\t\t\t\t\t\t\t\t<h1 style=\"font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;\">Bienvenido a DeeViClean, Gracias por elegirnos</h1>\n\t\t\t\t\t\t\t\t\t\t<p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\">Hola ".concat(savedUser.name, ",</p>\n                    <p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\">Gracias por registrarte en DeeViClean, ahora puedes disfrutar de todos nuestros servicios.</p>\n                    <h4>\xA1Valoramos tu tiempo libre!</h4>\n                    \n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"padding:30px;background: #16272b; color: #fff;\">\n\t\t\t\t\t\t\t<table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"padding:0;width:50%;\" align=\"left\">\n\t\t\t\t\t\t\t\t\t\t<p style=\"margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#fff;\">Copyright \xA9 2022 All Rights Reserved by DeeViClean.</a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</body>\n</html>\n            \n                ")
          };
          _context.next = 36;
          return _regenerator["default"].awrap(_email.transporter.sendMail(template, function (err, info) {
            if (err) {
              console.log(err);
            } else {
              console.log(info);
            }
          }));

        case 36:
          res.status(200).json({
            message: 'User created',
            status: 'success',
            token: savedUser
          });
          _context.next = 42;
          break;

        case 39:
          _context.prev = 39;
          _context.t11 = _context["catch"](32);
          return _context.abrupt("return", res.status(400).json({
            message: _context.t11.message,
            status: 'erro aquir'
          }));

        case 42:
          _context.next = 48;
          break;

        case 44:
          _context.prev = 44;
          _context.t12 = _context["catch"](0);
          console.log(_context.t12);
          return _context.abrupt("return", res.status(400).json({
            message: _context.t12.message,
            status: 'error'
          }));

        case 48:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 44], [32, 39]]);
};

exports.signUp = signUp;

var signIn = function signIn(req, res) {
  var userFound, matchPassword, token, val;
  return _regenerator["default"].async(function signIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _regenerator["default"].awrap(_user["default"].findOne({
            email: req.body.email
          }).populate('role'));

        case 3:
          userFound = _context2.sent;

          if (userFound) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Email not found',
            status: 'error'
          }));

        case 6:
          _context2.next = 8;
          return _regenerator["default"].awrap(_user["default"].comparePassword(req.body.password, userFound.password));

        case 8:
          matchPassword = _context2.sent;

          if (matchPassword) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Password incorrect',
            status: 'error'
          }));

        case 11:
          token = _jsonwebtoken["default"].sign({
            id: userFound._id
          }, process.env.secret_key);
          val = _jsonwebtoken["default"].verify(token, process.env.secret_key);
          res.status(200).json({
            message: 'User found',
            status: 'success',
            id_find: val.id,
            user: userFound,
            token: token
          });
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json({
            message: _context2.t0.message,
            status: 'error'
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
}; // ADMINISTRADOR_DEEVICLEAN_-- ADMIN_DEEVI@deevi


exports.signIn = signIn;