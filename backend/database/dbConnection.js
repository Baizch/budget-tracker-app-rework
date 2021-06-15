const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'budget_db',
});

try {
  connection.connect(() => {
    console.log('Database connected!');
  });
} catch (err) {
  console.log('err: err.message');
}

module.exports = connection;
