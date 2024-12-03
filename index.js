const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory data store
const users = {};

// Utility functions for validation
const isValidUsername = (username) => /^[a-zA-Z]+$/.test(username); 
const isValidPassword = (password) => /^[a-zA-Z0-9]{8,12}$/.test(password); 

// Routes
// Register a user
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    if (!isValidUsername(username)) {
        return res.status(400).json({ message: 'Username must consist of letters only.' });
    }

    if (!isValidPassword(password)) {
        return res.status(400).json({ message: 'Password must be 8-12 characters long and contain only letters and numbers.' });
    }

    if (users[username]) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    users[username] = { password };
    res.status(201).json({ message: 'User registered successfully.' });
});

// Get password for a user (for demo purposes only, insecure in production)
app.get('/password/:username', (req, res) => {
    const { username } = req.params;

    if (!users[username]) {
        return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ password: users[username].password });
});

// Login a user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    if (!users[username] || users[username].password !== password) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    res.json({ message: 'Login successful.' });
});

// Start server
app.listen(port, () => {
    console.log(`Library User Management API running at http://localhost:${port}`);
});
