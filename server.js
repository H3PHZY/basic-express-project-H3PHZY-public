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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});