import { fintechDB } from "../model/fintechDB.js"

export async function postCommunity(req, res) {
  const { email } = req.body;
  console.log("Request recibido con email:", email);

  // Validar que el email esté presente
  if (!email) {
    return res.status(400).json({ error: "El campo email es requerido." });
  }

  // Validar formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "El formato del correo es inválido." });
  }

  try {
    const [result] = await fintechDB.query(
      "INSERT INTO community(email) VALUES(?)",
      [email]
    );
    console.log("Inserción exitosa:", result);
    res.status(201).json({ message: "Usuario agregado exitosamente", result });
  } catch (err) {
    console.error("Error al guardar en la base de datos:", err);
    res.status(500).json({ error: "Error al guardar en la base de datos." });
  }
}


export async function postContact(req, res){
  const { name, lastName, email, message } = req.body
  console.log("Request recibido: ", name, lastName, email, message);

  try {
    const [result] = await fintechDB.query(
      "INSERT INTO contacts(name, lastName, email, message) VALUES(?,?,?,?)",
      [name, lastName, email, message]
    )
    console.log("Inserción exitosa: ", result)
    res.status(201).json({message: "Mensaje enviado correctamente", result})
  } catch (error) {
    console.error("Error al guardar el mensaje en la base de datos, ", err)
    res.status(500).json({error: "Error al guardar en la base de datos."})
  }
}