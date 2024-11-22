import express from 'express'
import { postCommunity, postContact } from '../controller/communityController.js'


const communityRouter = express.Router()

communityRouter.post('/postUser', postCommunity)
communityRouter.post('/postMessage', postContact)

export default communityRouter;