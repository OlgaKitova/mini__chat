
const express = require('express');

const PORT = 3000;
const app = express();

// database
const rooms = new Map();

app.get('/', (req, res) => {
  res.json('ответ')
});

app.listen(PORT, (err) => {
  if(err) throw Error(err);
  console.log("Сервер запущен")
});