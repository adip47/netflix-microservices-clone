const express = require('express');
const app = express();
app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
  const u = { id: users.length + 1, ...req.body };
  users.push(u);
  res.status(201).json(u);
});

app.get('/users/:id', (req, res) => {
  const found = users.find(u => u.id === +req.params.id);
  res.json(found || {});
});

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`user-service listening on ${port}`));
