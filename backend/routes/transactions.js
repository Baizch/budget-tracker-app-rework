const transactionsRouter = require('express').Router();
const {
  getTransactions,
  getTransaction,
} = require('../controllers/transactions');
const notEmpty = require('../middlewares/fieldNotEmpty');

transactionsRouter.get('/', getTransactions);

transactionsRouter.get('/:id', getTransaction);

module.exports = transactionsRouter;
