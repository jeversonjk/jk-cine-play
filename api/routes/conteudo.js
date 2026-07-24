const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Buscar categorias
router.get('/categorias/:tipo', async (req, res) => {
  try {
    const [dados] = await db.execute(`
      SELECT * FROM categorias 
      WHERE tipo = ? AND ativo = 1 
      ORDER BY ordem, nome
    `, [req.params.tipo]);

    res.json(dados);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Buscar itens por categoria
router.get('/lista/:categoriaId', async (req, res) => {
  try {
    const [dados] = await db.execute(`
      SELECT * FROM conteudos 
      WHERE categoria_id = ? AND ativo = 1 
      ORDER BY nome
    `, [req.params.categoriaId]);

    res.json(dados);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
