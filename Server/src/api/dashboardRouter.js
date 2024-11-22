import express from 'express'
import { getCountriesPercentageWoman, getDashboardData, getFreeEventsPercentage, getOnlineEventsPercentage } from '../controller/dashboardController.js'

const dashboardRouter = express.Router()

dashboardRouter.get('/getDashboardData', getDashboardData)
dashboardRouter.get('/getOnlineEvents', getOnlineEventsPercentage)
dashboardRouter.get('/getFreeEvents', getFreeEventsPercentage)
dashboardRouter.get('/getCountriesData', getCountriesPercentageWoman)

export default dashboardRouter;