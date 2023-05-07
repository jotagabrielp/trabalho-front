const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'main'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao se conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem sucedida ao banco de dados.');
});

module.exports = connection;

