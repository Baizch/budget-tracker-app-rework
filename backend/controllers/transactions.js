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

//POST - Works
/*const createTransaction = async (req, res) => {
  //const body = req.body;
  try {
    const { concepto, monto, fecha, tipo } = await Transactions.create({
      concepto: req.body.concepto,
      monto: req.body.monto,
      fecha: req.body.fecha,
      tipo: req.body.tipo,
    });
    const transaction = { concepto, monto, fecha, tipo };

    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};*/

//POST V2- Works as well
const createTransaction = async (req, res) => {
  const body = req.body;
  try {
    const transationToCreate = await Transactions.build({
      concepto: body.concepto,
      monto: body.monto,
      fecha: body.fecha,
      tipo: body.tipo,
    });
    transationToCreate.save();

    res.status(201).json(transationToCreate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//PUT
const updateTransaction = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
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
      const transactionToUpdate = await Transactions.update(
        {
          concepto: body.concepto,
          monto: body.monto,
          fecha: body.fecha,
          tipo: body.tipo,
        },
        {
          where: { id },
        }
      );
      res.status(202).json(transactionToUpdate);
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
  createTransaction,
  updateTransaction,
};

module.exports = transactionsController;
