const express = require('express');
const apiRouter = require('./routes/api');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRouter);

// Health check
app.get('/_health', (req, res) => res.sendStatus(200));


app.get("/test" , (req, res) => {
    res.send("hello");

})


// 404 Handler
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal error' });
});

module.exports = app;