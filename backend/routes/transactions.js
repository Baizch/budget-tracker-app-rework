const transactionsRouter = require('express').Router();
const { getTransactions } = require('../controllers/transactions');
const notEmpty = require('../middlewares/fieldNotEmpty');

transactionsRouter.get('/', getTransactions);

module.exports = transactionsRouter;
