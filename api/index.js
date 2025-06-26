const express = require('express');
const app = express();

app.get('/api/search', (req, res) => {
  res.json([{ message: '🔍 Plugin GPT Benchmarketing ativo!' }]);
});

module.exports = app;
