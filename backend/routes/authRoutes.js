const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err) => {
    if (err) return res.status(500).send("User already exists");
    res.send("Registration successful");
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).send("Invalid credentials");
    }
    res.json(result[0]);
  });
});

module.exports = router;
