const express = require('express');

const data = require('./script');

const app = express();

app.get('/api/script', (req, res) => {
  res.json(data);
});

const server = app.listen(3042, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Backend is running at http://%s:%s', host, port);
});
