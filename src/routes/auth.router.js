import { Router } from "express";
import * as authController from "./../controllers/auth.controller";
import { authJWT } from "./../middlewares";
const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API of Deevy',
        status: 'success',
        author: 'Bryan Herrera',
        girhub: 'https://github.com/Bryan-Herrera-DEV/'
    });
});
router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);


export default router; 