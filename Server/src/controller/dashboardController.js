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
    res.json(results[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({error: "Error al obtener datos del dashboard"})
  }
};
