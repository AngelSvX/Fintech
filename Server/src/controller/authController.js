import { fintechDB } from "../model/fintechDB.js";
import jwt from 'jsonwebtoken'

export async function loginAuth(req, res) {
  const { username, password } = req.body;
  const consult = 'SELECT * FROM admins WHERE username = ? AND password = ?';

  try {
    // Usando await para recibir los resultados de la consulta
    const [result] = await fintechDB.query(consult, [username, password]);

    if (result.length > 0) {
      const token = jwt.sign({ username }, "Stack", { expiresIn: '5m' });
      console.log(token)
      res.send({ token });
    } else {
      console.log('Wrong user');
      res.send({ message: 'wrong user' });
    }
  } catch (error) {
    console.log('Error in loginAuth:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
}