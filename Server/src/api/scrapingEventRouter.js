import express from 'express'
import { getEvents, getPosts, getProjects, getTrainer, scrapeEvents, scrapePosts, scrapeProjects, scrapeTrainer }  from '../controller/scrapingEventController.js'
const scrapeRouter = express.Router()

scrapeRouter.get('/events', scrapeEvents )
scrapeRouter.get('/trainings', scrapeTrainer)
scrapeRouter.get('/projects', scrapeProjects)
scrapeRouter.get('/posts', scrapePosts)

scrapeRouter.get('/getEvents', getEvents)
scrapeRouter.get('/getTrainings', getTrainer)
scrapeRouter.get('/getProjects', getProjects)
scrapeRouter.get('/getPosts', getPosts)

export default scrapeRouter