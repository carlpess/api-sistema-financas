const express = require('express');
const { verifyLogin } = require('./filtro/verifcalogin');
const { listCategories } = require('./controladores/categorias');
const {
    registerUser,
    login,
    detailUser,
    updateUser
} = require('./controladores/usuarios');
const {
    listTransactions,
    detailTransaction,
    registerTransaction,
    updateTransaction,
    deleteTransaction,
    transactionStatement
} = require('./controladores/transacoes');

const router = express();

//usuarios
router.post('/usuario', registerUser);
router.post('/login', login);
router.get('/usuario', verifyLogin, detailUser);
router.patch('/usuario', verifyLogin, updateUser);

//categorias
router.get('/categoria', verifyLogin, listCategories);

//transações
router.get('/transacao', verifyLogin, listTransactions);
router.get('/transacao/extrato', verifyLogin, transactionStatement);
router.get('/transacao/:id', verifyLogin, detailTransaction);
router.post('/transacao', verifyLogin, registerTransaction);
router.put('/transacao/:id', verifyLogin, updateTransaction);
router.delete('/transacao/:id', verifyLogin, deleteTransaction);

module.exports = router;