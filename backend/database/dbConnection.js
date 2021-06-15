const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  connection.connect(() => {
    console.log('Database connected!');
  });
} catch (err) {
  console.log({ err: err.message });
}

module.exports = connection;
