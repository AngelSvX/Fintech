import express from 'express'
import { postCommunity } from '../controller/communityController.js'


const communityRouter = express.Router()

communityRouter.post('/postUser', postCommunity)

export default communityRouter;