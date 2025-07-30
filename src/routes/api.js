const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { name = 'World' } = req.query;
  res.json({ 
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;