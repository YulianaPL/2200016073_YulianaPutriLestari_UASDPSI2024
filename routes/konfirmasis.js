const express = require('express');
const router = express.Router();
const konfirmasiController = require('../controllers/konfirmasiController');
const { authenticateToken } = require('../middleware/auth');
router.post('/', authenticateToken(['admin', 'user']),konfirmasiController.createKonfirmasi);
router.get('/', authenticateToken(['admin']),konfirmasiController.getAllKonfirmasi);
router.get('/:id',  authenticateToken(['admin']),konfirmasiController.getKonfirmasiById);
router.put('/:id',  authenticateToken(['admin']),konfirmasiController.updateKonfirmasi);
router.delete('/:id', authenticateToken(['admin']), konfirmasiController.deleteKonfirmasi);

module.exports = router;
