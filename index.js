const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory data store
const users = []; // Массив для хранения пользователей

// Routes
// Register a user
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }

  users.push({ username, password }); // Добавляем нового пользователя в массив
  res.status(201).json({ message: "User registered successfully." });
});

// Get password for a user (for demo purposes only, insecure in production)
app.get("/password/:username", (req, res) => {
  const { username } = req.params;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json({ password: user.password });
});

// Login a user
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const user = users.find((user) => user.username === username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  res.json({ message: "Login successful." });
});

// Get a user by username
app.get("/users/:username", (req, res) => {
  const { username } = req.params;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json(user);
});

// Get all users
app.get("/users", (req, res) => {
  res.json({ users }); // Возвращаем массив пользователей в виде объекта { users: [...] }
});

// Update a user by username
app.put("/users/:username", (req, res) => {
  const { username } = req.params;
  const { newUsername, newPassword } = req.body;

  const userIndex = users.findIndex((user) => user.username === username);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found." });
  }

  // Обновляем данные пользователя
  if (newUsername) users[userIndex].username = newUsername;
  if (newPassword) users[userIndex].password = newPassword;

  res.json({
    message: "User updated successfully.",
    user: users[userIndex],
  });
});

// Delete a user by username
app.delete("/users/:username", (req, res) => {
  const { username } = req.params;

  const userIndex = users.findIndex((user) => user.username === username);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found." });
  }

  users.splice(userIndex, 1); // Удаляем пользователя из массива
  res.json({ message: "User deleted successfully." });
});

// Start server
app.listen(port, () => {
  console.log(
    `Library User Management API running at http://localhost:${port}`
  );
});
