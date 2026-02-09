const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/save", (req, res) => {
  const { user_id, score, total } = req.body;

  const sql = "INSERT INTO results (user_id, score, total) VALUES (?, ?, ?)";
  db.query(sql, [user_id, score, total], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Result saved successfully");
  });
});

router.get("/history/:userId", (req, res) => {
  const userId = req.params.userId;

  const sql = `
    SELECT score, total, created_at
    FROM results
    WHERE user_id=?
    ORDER BY created_at DESC
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});


module.exports = router;
