const express = require('express');
const app = express();

const orders = [
  { id: 101, userId: 1, item: 'Ingresso Show', value: 100 },
  { id: 102, userId: 1, item: 'Camarote', value: 250 },
  { id: 103, userId: 2, item: 'Open Bar', value: 180 }
];

app.get('/orders', (req, res) => {
  res.json(orders);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Orders service rodando na porta ${PORT}`);
});
