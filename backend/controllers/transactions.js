const { Transactions } = require('../models/index');

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const transactionsController = {
  getTransactions,
};

module.exports = transactionsController;
