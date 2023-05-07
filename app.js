const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('usuario-login');
});

app.get('/registro', (req, res) => {
  res.render('usuario-registro');
});

app.get('/ponto', (req, res) => {
  res.render('ponto');
});


app.listen(8081, () => {
  console.log('Server started on port 8081');
});
