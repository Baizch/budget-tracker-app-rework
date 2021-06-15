const express = require('express');

const indexRouter = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

try {
  app.listen(3000, () => {
    console.log('Server is up and running!');
  });
} catch (err) {
  console.log('error: error.message');
}
