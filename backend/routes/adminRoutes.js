const express = require("express");
const router = express.Router();
const db = require("../db");

// Add question
router.post("/add-question", (req, res) => {
  const {
    question,
    option_a,
    option_b,
    option_c,
    option_d,
    correct_option,
    difficulty
  } = req.body;

  const sql = `
    INSERT INTO questions
    (question, option_a, option_b, option_c, option_d, correct_option, difficulty)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [question, option_a, option_b, option_c, option_d, correct_option, difficulty],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Database error");
      }
      res.send("Question added successfully");
    }
  );
});

module.exports = router;
