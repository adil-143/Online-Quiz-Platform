function register() {
  fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("regEmail").value.trim(),
      password: document.getElementById("regPassword").value.trim()
    })
  })
  .then(res => res.text())
  .then(msg => alert(msg));
}

function login() {
  fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value.trim()
    })
  })
  .then(res => {
    if (!res.ok) throw new Error("Login failed");
    return res.json();
  })
  .then(user => {
    localStorage.setItem("user_id", user.id);
    window.location.href = "quiz.html";
  })
  .catch(() => alert("Invalid login"));
}
