const express = require('express');
const app = express();
app.use(express.json());

const history = {};

app.post('/history', (req, res) => {
  const { userId, videoId } = req.body;
  history[userId] = history[userId] || [];
  history[userId].push({ videoId, watchedAt: Date.now() });
  res.status(201).json(history[userId]);
});

app.get('/history/:userId', (req, res) => res.json(history[req.params.userId] || []));

const port = process.env.PORT || 8004;
app.listen(port, () => console.log(`watch-history-service on ${port}`));
