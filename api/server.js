const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORTA = process.env.PORTA || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/dispositivos', require('./routes/dispositivos'));
app.use('/api/conteudo', require('./routes/conteudo'));
app.use('/api/servidores', require('./routes/servidores'));

// Rota de teste
app.get('/', (req, res) => {
  res.send('✅ JK CINE PLAY - API Rodando!');
});

// Inicia servidor
app.listen(PORTA, () => {
  console.log(`🚀 API rodando em: http://localhost:${PORTA}`);
});
