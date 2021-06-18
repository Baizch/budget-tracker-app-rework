const { Transactions } = require('../models/index');

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const getTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    const transaction = await Transactions.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ err: 'Transaction not found' });
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const transactionsController = {
  getTransactions,
  getTransaction,
};

module.exports = transactionsController;
