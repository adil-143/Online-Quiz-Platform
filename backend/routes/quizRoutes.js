const express = require("express");
const router = express.Router();
const db = require("../db");
const { decideDifficulty } = require("../logic/personalization");

router.get("/questions/user/:userId", (req, res) => {
  const userId = req.params.userId;

  // get average score %
  const scoreSql = `
    SELECT AVG((score / total) * 100) AS avgScore
    FROM results
    WHERE user_id = ?
  `;

  db.query(scoreSql, [userId], (err, result) => {
    if (err) return res.status(500).send(err);

    const avgScore = result[0].avgScore || 0;
    const difficulty = decideDifficulty(avgScore);

    const questionSql = `
      SELECT * FROM questions
      WHERE difficulty = ?
      ORDER BY RAND()
      LIMIT 5
    `;

    db.query(questionSql, [difficulty], (err2, questions) => {
      if (err2) return res.status(500).send(err2);
      res.json({ difficulty, questions });
    });
  });
});

module.exports = router;
