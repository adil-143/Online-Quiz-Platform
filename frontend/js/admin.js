function addQuestion() {
  fetch("http://localhost:3000/api/admin/add-question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: document.getElementById("question").value,
      option_a: document.getElementById("a").value,
      option_b: document.getElementById("b").value,
      option_c: document.getElementById("c").value,
      option_d: document.getElementById("d").value,
      correct_option: document.getElementById("correct").value,
      difficulty: document.getElementById("difficulty").value
    })
  })
  .then(res => res.text())
  .then(msg => document.getElementById("msg").innerText = msg);
}
