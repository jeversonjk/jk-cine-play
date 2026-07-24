const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/lista', async (req, res) => {
  try {
    const [dados] = await db.execute(`
      SELECT * FROM servidores 
      WHERE ativo = 1 
      ORDER BY nome
    `);
    res.json(dados);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
