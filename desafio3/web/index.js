const express = require('express');
const { Pool } = require('pg');
const Redis = require('ioredis');

const app = express();
const PORT = 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'senha123',
  database: process.env.DB_NAME || 'teste',
});


const redis = new Redis({
  host: process.env.REDIS_HOST || 'cache',
  port: 6379,
});


app.get('/', async (req, res) => {
  try {
   
    await pool.query('CREATE TABLE IF NOT EXISTS hits (id SERIAL, at TIMESTAMP);');

    const now = new Date();
    await pool.query('INSERT INTO hits (at) VALUES ($1);', [now]);

    const result = await pool.query('SELECT COUNT(*) FROM hits;');
    const total = result.rows[0].count;

    const redisCount = await redis.incr('hits_count');

    res.json({
      message: 'Hello from web service',
      db_hits: total,
      redis_hits: redisCount,
    });
  } catch (err) {
    console.error('Erro na rota /:', err);
    res.status(500).json({ error: 'Erro interno' });
  }
});


app.listen(PORT, () => {
  console.log(`Web rodando na porta ${PORT}`);
});
