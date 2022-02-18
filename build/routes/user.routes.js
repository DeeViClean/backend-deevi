"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userController = _interopRequireWildcard(require("./../controllers/user.controller"));

var _middlewares = require("./../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get("/getUserById/:id", [_middlewares.authJWT.verifytoken], userController.getUserById);
router.get("/getComments", userController.getComments);
router.get("/get_precios", userController.get_precios);
router.put("/updateUser/:id", [_middlewares.authJWT.verifytoken], userController.updateUser);
router.put("/updatePrecios/:id", [_middlewares.authJWT.verifytoken, _middlewares.authJWT.isAdmin], userController.update_precios); //rutas admin

router.get("/getUsers", [_middlewares.authJWT.verifytoken, _middlewares.authJWT.isAdmin], userController.getUsers); //router.get("/getUser", [authJWT.verifytoken, authJWT.isAdmin], userController.getUser);

router["delete"]("/deleteUser/:id", [_middlewares.authJWT.verifytoken, _middlewares.authJWT.isAdmin], userController.deleteUser); //comentarios

router.get("/get_comentarios", userController.get_comentarios);
router["delete"]("/delete_comentario/:id", [_middlewares.authJWT.verifytoken, _middlewares.authJWT.isAdmin], userController.delete_comentario);
router.put("/update_comentario/:id", [_middlewares.authJWT.verifytoken, _middlewares.authJWT.isAdmin], userController.update_comentario);
router.post("/create_comentario", [_middlewares.authJWT.verifytoken, _middlewares.authJWT.isAdmin], userController.create_comentario);
var _default = router;
exports["default"] = _default;