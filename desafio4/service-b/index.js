const express = require('express');
const axios = require('axios');

const app = express();

// URL do service A (vindo por env ou padrão pro docker-compose)
const USERS_SERVICE_URL = process.env.USERS_URL || 'http://service-a:3001/users';

app.get('/summary', async (req, res) => {
  try {
    const { data: users } = await axios.get(USERS_SERVICE_URL);

    const summary = users.map(u => `Usuário ${u.name} ativo desde ${u.since}`);

    res.json({ summary });
  } catch (err) {
    console.error('Erro ao consultar service A:', err.message);
    res.status(500).json({ error: 'Erro ao consultar service A' });
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Service B (summary) rodando na porta ${PORT}`);
});
