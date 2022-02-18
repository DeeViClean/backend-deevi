"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _initialsetup = require("./libs/initialsetup");

var _app = _interopRequireDefault(require("./app"));

var _comentario = _interopRequireDefault(require("./models/comentario"));

require('./database');
/*const create_precios_default = async () => {
    try {
        const count_precios = await comment.estimatedDocumentCount();
        const precios_values = await Promise.all([
            new comment({
                titulo: 'Blog Uno',
                url_image: 'https://images.unsplash.com/photo-1641834828839-075d91255467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
                fecha: '2020-05-05',
                descripcion: [
                    ["A", "B", "C"],
                ]

            }).save()
        ])
        console.log(precios_values);

    } catch (error) {

    }
}
create_precios_default();*/
//captura de errores


_app["default"].use(function (req, res, next) {
  var error = new Error('Ocurrio un error');
  error.status = 404;
  next(error);
});

_app["default"].use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

(0, _initialsetup.createRoles)(); //iniciandoservidor

_app["default"].listen(_app["default"].get('port'), function () {
  console.log("Server en escucha desde: ".concat(_app["default"].get("port")));
});