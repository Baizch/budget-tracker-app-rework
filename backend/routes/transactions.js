const transactionsRouter = require('express').Router();
const {
  getTransactions,
  getTransaction,
  deleteTransaction,
  createTransaction,
  updateTransaction,
} = require('../controllers/transactions');
const notEmpty = require('../middlewares/fieldNotEmpty');

//ROUTES

//GET routes
transactionsRouter.get('/', getTransactions);

transactionsRouter.get('/:id', getTransaction);

//DEL route
transactionsRouter.delete('/:id', deleteTransaction);

//POST & PUT routes
transactionsRouter.post(
  '/',
  createTransaction /*
  notEmpty('concepto'),
  notEmpty('monto'),
  notEmpty('fecha'),
  notEmpty('tipo')*/
);

transactionsRouter.put('/:id', updateTransaction);

module.exports = transactionsRouter;
