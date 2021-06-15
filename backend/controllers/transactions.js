const db = require('mysql');

const getTransactions = async () => {
  try {
    const transactions = await db.findAll({
      attributes: ['id', 'concepto', 'monto', 'fecha', 'tipo'],
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const transactionsController = {
  getTransactions,
};

module.exports = transactionsController;
