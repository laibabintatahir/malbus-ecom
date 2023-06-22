import express from 'express';
import { postuser, getuser } from '../controller/user.js';
const userRouter = express.Router();

userRouter.post('/', postuser);

userRouter.get('/', getuser);


export default userRouter;
