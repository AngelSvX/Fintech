import express from 'express'
import { scrapeEvents, scrapeTrainer }  from '../controller/scrapingEventController.js'
const scrapeRouter = express.Router()

scrapeRouter.get('/events', scrapeEvents )
scrapeRouter.get('/trainings', scrapeTrainer)

export default scrapeRouter