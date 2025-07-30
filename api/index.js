const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/test', (req, res) => {
  res.json({ message: 'It finally works!' });
});

app.get('/hello', (req, res) => {
  res.send('Hello from Vercel Express!');
});

module.exports = serverless(app);
