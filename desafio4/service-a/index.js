const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Mirna', since: '2024-01-01' },
  { id: 2, name: 'Anny', since: '2023-10-10' }
];

app.get('/users', (req, res) => {
  res.json(users);
}); 

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Service A (users) rodando na porta ${PORT}`);
});
