import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAnime(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getAnime = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM anime");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(400).send("Method not allowed");
  }
};