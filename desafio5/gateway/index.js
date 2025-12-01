const express = require('express');
const axios = require('axios');

const app = express();

const USERS_SERVICE_URL =
  process.env.USERS_SERVICE_URL || 'http://users-service:3001/users';
const ORDERS_SERVICE_URL =
  process.env.ORDERS_SERVICE_URL || 'http://orders-service:3002/orders';


app.get('/users', async (req, res) => {
  try {
    const { data } = await axios.get(USERS_SERVICE_URL);
    res.json(data);
  } catch (err) {
    console.error('Erro ao chamar users-service:', err.message);
    res.status(500).json({ error: 'Erro ao consultar users-service' });
  }
});


app.get('/orders', async (req, res) => {
  try {
    const { data } = await axios.get(ORDERS_SERVICE_URL);
    res.json(data);
  } catch (err) {
    console.error('Erro ao chamar orders-service:', err.message);
    res.status(500).json({ error: 'Erro ao consultar orders-service' });
  }
});


app.get('/users-with-orders', async (req, res) => {
  try {
    const [usersRes, ordersRes] = await Promise.all([
      axios.get(USERS_SERVICE_URL),
      axios.get(ORDERS_SERVICE_URL)
    ]);

    const users = usersRes.data;
    const orders = ordersRes.data;

    const combined = users.map(u => ({
      ...u,
      orders: orders.filter(o => o.userId === u.id)
    }));

    res.json(combined);
  } catch (err) {
    console.error('Erro ao combinar serviços:', err.message);
    res.status(500).json({ error: 'Erro ao combinar dados' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway rodando na porta ${PORT}`);
});
