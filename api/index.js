module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  res.json({ 
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  });
};