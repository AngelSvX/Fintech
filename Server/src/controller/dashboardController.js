import { fintechDB } from "../model/fintechDB.js";

export const getDashboardData = async (req, res) => {
  try {
    const [results] = await fintechDB.query(
      `
      SELECT
        (SELECT COUNT(*) FROM trainings) AS totalTrainings,
        (SELECT COUNT(*) FROM posts) AS totalPosts,
        (SELECT COUNT(*) FROM projects) AS totalProjects,
        (SELECT COUNT(*) FROM events) AS totalEvents
      FROM DUAL
      `
    );
    res.json(results[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos del dashboard" });
  }
};

export const getOnlineEventsPercentage = async (req, res) => {
  try {
    const [result] = await fintechDB.query(
      `
        SELECT
          COUNT(*) AS totalEvents,
          100 AS onlinePercentage --
        FROM events
      `
    );
    res.json(result[0]);
  } catch (error) {
    console.error("error al obtener el porcentaje de eventos Online: ", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de los eventos online" });
  }
};

export const getFreeEventsPercentage = async (req, res) => {
  try {
    const [result] = await fintechDB.query(
      `
      SELECT
        COUNT(*) AS totalEvents,
        100 AS freeEventsPercentage -- Asumimos que todos los eventos son gratuitos
      FROM events
      `
    );
    res.json(result[0]);
  } catch (error) {
    console.error("Error al obtener el porcentaje de eventos sin costo:", error);
    res.status(500).json({ error: "Error al obtener datos de eventos sin costo" });
  }
};

export const getCountriesPercentageWoman = async (req, res) => {
  try {
    const [results] = await fintechDB.query(
      `
      SELECT country, COUNT(*) AS totalProjects
      FROM projects
      GROUP BY country
      ORDER BY totalProjects DESC
      LIMIT 10
      `
    );
    res.json(results);
  } catch (error) {
    console.error("Error al obtener países con mayor número de actividades:", error);
    res.status(500).json({ error: "Error al obtener datos de países" });
  }
};