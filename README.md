# 🧠 Online Quiz Platform

A full-stack **Online Quiz Platform** built using **HTML, CSS, JavaScript (Node.js), and MySQL**.  
The platform allows users to take timed quizzes, view results and history, while admins can manage quiz questions.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- Timed quizzes with auto-submit
- Dynamic quiz questions from database
- Quiz result page with score
- Quiz history with **date & time**
- Performance-based quiz difficulty (Easy / Medium / Hard)
- Responsive and clean UI

### 🛠️ Admin Features
- Admin panel to add new quiz questions
- Set correct answers and difficulty level
- Questions dynamically reflected in quizzes

---

## 🧩 Tech Stack

| Layer       | Technology |
|------------|------------|
| Frontend   | HTML, CSS, JavaScript |
| Backend    | Node.js, Express.js |
| Database   | MySQL |
| Tools      | VS Code, MySQL Workbench, Git |

---

## 📂 Project Structure

Advance Quiz Platform/ <br>
│<br>
├── frontend/<br>
│ ├── index.html # Login & Registration<br>
│ ├── quiz.html # Quiz page<br>
│ ├── result.html # Result page<br>
│ ├── history.html # Quiz history<br>
│ ├── admin.html # Admin panel<br>
│ ├── css/<br>
│ │ └── style.css # Styling<br>
│ └── js/<br>
│ ├── auth.js<br>
│ ├── quiz.js<br>
│ ├── history.js<br>
│ └── admin.js<br>
│<br>
├── backend/<br>
│ ├── server.js # Express server<br>
│ ├── db.js # MySQL connection<br>
│ ├── routes/<br>
│ │ ├── authRoutes.js<br>
│ │ ├── quizRoutes.js<br>
│ │ ├── resultRoutes.js<br>
│ │ └── adminRoutes.js<br>
│ └── logic/<br>
│ └── personalization.js<br>
│<br>
├── screenshots/ # Project screenshots<br>
│<br>
└── README.md<br>


---

## 🧠 Performance-Based Personalization

The system adapts quiz difficulty based on a user’s past performance:

- **Average score < 40% → Easy**
- **Average score 40% – 70% → Medium**
- **Average score > 70% → Hard**

This makes the quiz experience adaptive and user-focused.

---

## 🗄️ Database Design

### Users Table
```sql
users(id, name, email, password)
```

### Questions Table
```sql
questions(id, question, option_a, option_b, option_c, option_d, correct_option, difficulty)
```

### Result Table
```sql
results(id, user_id, score, total, created_at)
```
