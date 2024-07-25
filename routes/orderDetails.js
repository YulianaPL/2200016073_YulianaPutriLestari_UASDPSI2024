const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', authenticateToken(['admin', 'user']),orderDetailController.getAllOrderDetail);
router.post('/', authenticateToken(['admin']),orderDetailController.createOrderDetail);
router.get('/:id', authenticateToken(['admin']),orderDetailController.getOrderDetailById);
router.put('/:id', authenticateToken(['admin']),orderDetailController.updateOrderDetail);
router.delete('/:id', authenticateToken(['admin']),orderDetailController.deleteOrderDetail);

module.exports = router;
