const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET = process.env.JWT_SECRET || 'secret';

app.post('/login', (req, res) => {
  // simple dummy login
  const token = jwt.sign({ user: req.body.username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/verify', (req, res) => {
  const auth = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = jwt.verify(auth, SECRET);
    res.json(decoded);
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

const port = process.env.PORT || 8002;
app.listen(port, () => console.log(`auth-service on ${port}`));
