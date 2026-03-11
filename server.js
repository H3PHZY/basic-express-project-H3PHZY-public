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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});