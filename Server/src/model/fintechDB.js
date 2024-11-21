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

export async function saveProjects(project){
  try {
    const {title, country, hrefUrl} = project
    if(!title){
      console.log("Proyecto omitido por falta de título o contenido.")
      return;
    }

    const [existingProject] = await fintechDB.query(
      "SELECT * FROM projects WHERE title = ?",
      [title]
    );

    if(existingProject.length > 0){
      console.log(`El proyecto "${title}" ya existe en la base de datos con contenido similar.`)
      return;
    }

    const sql = "INSERT INTO projects (title, country, hrefUrl) VALUES(?, ?, ?)";

    const [result] = await fintechDB.query(sql, [title, country, hrefUrl]);
    return result;
  } catch (error) {
    console.error("Error al guardar el proyecto: ", project, error)
  }
}

export async function savePosts(post){
  try {
    const {title, date, imgUrl, hrefUrl} = post

    if(!title){
      console.log("Proyecto omitido por falta de título")
    }

    const [existingPosts] = await fintechDB.query(
      "SELECT * FROM posts WHERE title = ?",
      [title]
    );

    if(existingPosts.length > 0){
      console.log(`El post "${title}" ya existe en la base de datos con contenido similar.`)
      return;
    }

    const sql = "INSERT INTO posts (title, date, imgUrl, hrefUrl) VALUES(?,?,?,?)";

    const [result] = await fintechDB.query(sql, [title, date, imgUrl, hrefUrl])
    return result;
  } catch (error) {
    console.error("Error al guardar el post: " + post + " con el error: " + error )
  }
}