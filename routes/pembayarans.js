const express = require('express');
const router = express.Router();
const pembayaranController = require('../controllers/pembayaranController');

router.post('/',authenticateToken(['admin', 'user']), pembayaranController.createPembayaran);
router.get('/', authenticateToken(['admin']),pembayaranController.getAllPembayaran);
router.get('/:id', authenticateToken(['admin']),pembayaranController.getPembayaranById);
router.put('/:id', authenticateToken(['admin']),pembayaranController.updatePembayaran);
router.delete('/:id', authenticateToken(['admin']),pembayaranController.deletePembayaran);

module.exports = router;
