const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send({ 'connected': true });
});

app.listen(5000, () => {
  console.log(`Server running at port 5000`);
});
