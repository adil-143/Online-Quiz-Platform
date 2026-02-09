let questions = [];
let timeLeft = 30;
let timer;

function loadQuiz() {
  startTimer();

  const userId = localStorage.getItem("user_id");

  if (!userId) {
    alert("Please login first");
    return;
  }

  fetch(`http://localhost:3000/api/quiz/questions/user/${userId}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to fetch questions");
      }
      return res.json();
    })
    .then(data => {
      console.log("API DATA:", data); // 🔥 DEBUG LINE

      questions = data.questions;

      if (!questions || questions.length === 0) {
        alert("No questions found for this difficulty");
        return;
      }

      const quizDiv = document.getElementById("quiz");
      quizDiv.innerHTML = "";

      questions.forEach((q, index) => {
        quizDiv.innerHTML += `
            <div class="question">
            Q${index + 1}. ${q.question}
            </div>

            <label class="option">
            <input type="radio" name="q${index}" value="A">
            <span>${q.option_a}</span>
            </label>

            <label class="option">
            <input type="radio" name="q${index}" value="B">
            <span>${q.option_b}</span>
            </label>

            <label class="option">
            <input type="radio" name="q${index}" value="C">
            <span>${q.option_c}</span>
            </label>

            <label class="option">
            <input type="radio" name="q${index}" value="D">
            <span>${q.option_d}</span>
            </label>
        `;
        });

    })
    .catch(err => {
      console.error(err);
      alert("Error loading quiz. Check console.");
    });
}



function startTimer() {
  timer = setInterval(() => {
    document.getElementById("time").innerText = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      alert("Time up! Quiz auto-submitted.");
      submitQuiz();
    }
  }, 1000);
}

function submitQuiz() {
  clearInterval(timer);

  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    if (selected && selected.value === q.correct_option) {
      score++;
    }
  });

  localStorage.setItem("score", score);
  localStorage.setItem("total", questions.length);

  fetch("http://localhost:3000/api/result/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: localStorage.getItem("user_id"),
      score: score,
      total: questions.length
    })
  });

  window.location.href = "result.html";
}
