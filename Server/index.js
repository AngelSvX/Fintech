import express from 'express'
import cors from 'cors'
import cron from "node-cron"
import authRouter from './src/api/authRouter.js'
import scrapeRouter from './src/api/scrapingEventRouter.js'
import communityRouter from './src/api/communityRouter.js'
import dashboardRouter from './src/api/dashboardRouter.js'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Iniciar scraping y guardar datos
// Evitar descomentar y entrar a la ruta scrapeEvents xd
//app.get('/scrapeEvents', scrapeAndSave)


/**
 * Cuando el servidor esté encendido, entren a esta ruta con el localhost
 * que colocaron.
 * Aquí se podrá ver todos los elementos scrapeados listos para ser
 * enviados al Front-End
 */

// app.get("/events", getEvents)
app.use("/api", scrapeRouter)
app.use("/api", authRouter)
app.use("/api", communityRouter)
app.use("/api", dashboardRouter)


// cron.schedule("* * * * *", () => {
//   scrapeAndSave();
// });


app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000")
})
