const userId = localStorage.getItem("user_id");

fetch(`http://localhost:3000/api/result/history/${userId}`)
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("historyTable");
    table.innerHTML = "";

    data.forEach((row, index) => {
      const date = new Date(row.created_at);

      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();

      table.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${row.score}</td>
          <td>${row.total}</td>
          <td>${formattedDate} ${formattedTime}</td>
        </tr>
      `;
    });
  });

function goBack() {
  window.location.href = "quiz.html";
}
