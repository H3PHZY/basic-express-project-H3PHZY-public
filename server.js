const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Request received: ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page. This server was built with Express.js.');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at: hello@myexpressapp.com');
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `You requested user with ID: ${id}`, id: id });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});