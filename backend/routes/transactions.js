const transactionsRouter = require('express').Router();
const {
  getTransactions,
  getTransaction,
  deleteTransaction,
} = require('../controllers/transactions');
const notEmpty = require('../middlewares/fieldNotEmpty');

//ROUTES

//GET routes
transactionsRouter.get('/', getTransactions);

transactionsRouter.get('/:id', getTransaction);

//DEL route
transactionsRouter.delete('/:id', deleteTransaction);

//POST & PUT routes

module.exports = transactionsRouter;
