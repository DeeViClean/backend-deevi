import { Router } from "express";
import * as userController from "./../controllers/user.controller";
import { authJWT } from "./../middlewares";

const router = Router();

router.get("/getUserById/:id", [authJWT.verifytoken], userController.getUserById);
router.get("/getComments", userController.getComments);
router.get("/get_precios", userController.get_precios);

router.put("/updateUser/:id", [authJWT.verifytoken], userController.updateUser);
router.put("/updatePrecios/:id", [authJWT.verifytoken, authJWT.isAdmin], userController.update_precios);

//rutas admin
router.get("/getUsers", [authJWT.verifytoken, authJWT.isAdmin], userController.getUsers);
//router.get("/getUser", [authJWT.verifytoken, authJWT.isAdmin], userController.getUser);
router.delete("/deleteUser/:id", [authJWT.verifytoken, authJWT.isAdmin], userController.deleteUser);

//comentarios
router.get("/get_comentarios", userController.get_comentarios);
router.delete("/delete_comentario/:id", [authJWT.verifytoken, authJWT.isAdmin], userController.delete_comentario);
router.put("/update_comentario/:id", [authJWT.verifytoken, authJWT.isAdmin], userController.update_comentario);
router.post("/create_comentario", [authJWT.verifytoken, authJWT.isAdmin], userController.create_comentario);
export default router;