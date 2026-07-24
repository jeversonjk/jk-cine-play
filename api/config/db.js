const mysql = require('mysql2/promise');

// Altere os dados conforme seu MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'SUA_SENHA_AQUI',
  database: 'jk_cine_play',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
