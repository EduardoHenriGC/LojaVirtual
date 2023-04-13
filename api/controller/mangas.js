import { db } from "../db.js";

export const getMangas = (_, res) => {
  const q = "SELECT * FROM produto WHERE id_tpproduto = 2";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
