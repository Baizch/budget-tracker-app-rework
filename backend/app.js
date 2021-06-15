const express = require('express');
db = require('./database/dbConnection');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const transactionsRouter = require('./routes/transactions');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/transactions', transactionsRouter);

try {
  app.listen(3000, () => {
    console.log('Server is up and running!');
  });
} catch (err) {
  console.log({ err: error.message });
}
