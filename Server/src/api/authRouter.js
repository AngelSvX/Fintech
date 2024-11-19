import express from 'express'
const authRouter = express.Router();
import {loginAuth} from '../controller/authController.js'

authRouter.post('/login', loginAuth)

export default authRouter;