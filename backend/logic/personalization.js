function decideDifficulty(avgScorePercent) {
  if (avgScorePercent < 40) return "easy";
  if (avgScorePercent < 70) return "medium";
  return "hard";
}

module.exports = { decideDifficulty };
