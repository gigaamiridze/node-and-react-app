const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello Express');
})

app.get('/api', (req, res) => {
  res.json({ 'users': ['Felix', 'Maxim', 'Lucas'] });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
