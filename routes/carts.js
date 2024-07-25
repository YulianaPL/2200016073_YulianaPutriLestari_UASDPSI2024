const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/',authenticateToken(['admin', 'user']), cartController.createCart);
router.get('/', authenticateToken(['admin']),cartController.getAllCarts);
router.get('/:id',authenticateToken(['admin']), cartController.getCartById);
router.put('/:id',authenticateToken(['admin']), cartController.updateCart);
router.delete('/:id', authenticateToken(['admin']),cartController.deleteCart);

module.exports = router;
