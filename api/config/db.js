const { Pool } = require('pg');

const pool = new Pool({
  host: 'db.dcfndqpehjksblmfho.supabase.co',
  port: 5432,
  user: 'postgres',
  password: 'Database@2026JK', // <
  database: 'postgres',
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
