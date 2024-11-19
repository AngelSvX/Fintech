import mysql from "mysql2/promise";

// Elimina los valores y coloca los tuyos
export const fintechDB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Angelsvx211403",
  database: "fintech",
});

/*
  Esta función recibe un parámetro "event" el cual es un JSON
  con los valores "title" y "content", luego los inserta
  en la tabla "events" en sus respectivas columnas
*/
export async function saveEvent(event) {
  try {
    const { title, content, hrefUrl, imgUrl } = event;

    // Verificar si title o content están vacíos
    if (!title || !content) {
      console.log("Evento omitido por falta de título o contenido.");
      return;
    }

    const [existingEvent] = await fintechDB.query(
      "SELECT * FROM events WHERE title = ? AND content = ?",
      [title, content]
    );

    if (existingEvent.length > 0) {
      console.log(
        `El evento "${title}" ya existe en la base de datos con contenido similar.`
      );
      return;
    }

    const sql = "INSERT INTO events (title, content, hrefUrl, imgUrl) VALUES(?, ?, ?, ?)";
    const [result] = await fintechDB.query(sql, [title, content, hrefUrl, imgUrl]);
    return result;
  } catch (error) {
    console.error('Error al guardar el evento: ', error);
  }
}

export async function saveTraining(training){
  try {
    const { title, content, hrefUrl, imgUrl } = training

    if(!title || !content){
      console.log("Capacitación omitida por falta de título o contenido.")
      return;
    }

    const [existingTraining] = await fintechDB.query(
      "SELECT * FROM trainings WHERE title = ? AND content = ?",
      [title, content]
    );

    if(existingTraining.length > 0){
      console.log(`La capacitación "${title}" ya existe en la base de datos con contenido similar.`)
      return;
    }

    const sql = "INSERT INTO trainings (title, content, hrefUrl, imgUrl) VALUES(?, ?, ?, ?)";

    const [result] = await fintechDB.query(sql, [title, content, hrefUrl, imgUrl]);
    return result;
  } catch (error) {
    console.error('Error al guardar la capacitación: ', error)
  }
}