import {Router} from 'express';
import {UserController} from '../controller/user.controller'

const router = Router();

let userController = new UserController();
router.get('/signin', userController.getSignIn);

router.get('/signup', userController.getSignUp);

router.post('/signup', userController.postUser);

router.post('/signin', userController.postSignIn);

export default router;