import express from 'express'
import cors from 'cors'
import cron from "node-cron"
import authRouter from './src/api/authRouter.js'
import scrapeRouter from './src/api/scrapingEventRouter.js'
import communityRouter from './src/api/communityRouter.js'
import dashboardRouter from './src/api/dashboardRouter.js'
import { scrapeEvents, scrapePosts, scrapeProjects, scrapeTrainer } from './src/controller/scrapingEventController.js'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Iniciar scraping y guardar datos
// Evitar descomentar y entrar a la ruta scrapeEvents xd
//app.get('/scrapeEvents', scrapeAndSave)

// app.get("/events", getEvents)
app.use("/api", scrapeRouter)
app.use("/api", authRouter)
app.use("/api", communityRouter)
app.use("/api", dashboardRouter)


cron.schedule("0 0 * * *", async () => {
  try {
    await scrapeEvents()
    await scrapeTrainer()
    await scrapeProjects()
    await scrapePosts()
  } catch (error) {
    console.error("Error al realizar el scrapping automático: ",error)
    res.status(500).json({message: "Ocurrió un error durante el scraping automatizado."})
  }
});


app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000")
})
