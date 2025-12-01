const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Lorde Boludo' },
  { id: 2, name: 'Anny' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Users service rodando na porta ${PORT}`);
});
