const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Verificar status do dispositivo
router.post('/verificar', async (req, res) => {
  try {
    const { mac } = req.body;

    const [rows] = await db.execute(`
      SELECT d.*, s.tipo, s.url, s.usuario, s.senha, s.nome AS nome_servidor
      FROM dispositivos d
      LEFT JOIN servidores s ON d.servidor_id = s.id
      WHERE d.mac = ? LIMIT 1
    `, [mac]);

    if (rows.length === 0) {
      return res.json({ status: 'nao_cadastrado', mensagem: 'MAC não encontrado' });
    }

    const disp = rows[0];

    if (disp.status !== 'ativo') {
      return res.json({ status: 'pendente', mensagem: 'Aguardando ativação' });
    }

    res.json({
      status: 'ativo',
      dados: {
        id: disp.id,
        nome: disp.nome_dispositivo,
        servidor: {
          tipo: disp.tipo,
          url: disp.url,
          usuario: disp.usuario,
          senha: disp.senha
        },
        expiracao: disp.data_expiracao
      }
    });

  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
