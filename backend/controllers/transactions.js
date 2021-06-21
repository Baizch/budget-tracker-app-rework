const { Transactions } = require('../models/index');

//GET
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//DEL
const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  const transaction = await Transactions.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  if (transaction) {
    try {
      const transactionToDelete = Transactions.destroy({
        where: {
          id,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      res.status(200).json({ message: 'Transaction deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(404).json({ message: 'Transaction not found' });
  }
};

const transactionsController = {
  getTransactions,
  getTransaction,
  deleteTransaction,
};

module.exports = transactionsController;
