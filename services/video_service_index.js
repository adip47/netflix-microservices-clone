const express = require('express');
const app = express();
app.use(express.json());

const videos = [
  { id: 1, title: 'Sample Video', url: 'http://example.com/video.mp4' }
];

app.get('/videos', (req, res) => res.json(videos));

const port = process.env.PORT || 8003;
app.listen(port, () => console.log(`video-service listening on ${port}`));
