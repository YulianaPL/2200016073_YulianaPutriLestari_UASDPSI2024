// routes/katogoris.js
const express = require('express');
const router = express.Router();
const kategoriController = require('../controllers/kategoriController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', authenticateToken(['admin', 'user']), kategoriController.getAllKategori);
router.get('/:id', authenticateToken(['admin', 'user']), kategoriController.getKategoriById);
router.post('/', authenticateToken(['admin']), kategoriController.createKategori);
router.put('/:id',authenticateToken(['admin',]),  kategoriController.updateKategori);
router.delete('/:id', authenticateToken(['admin',]), kategoriController.deleteKategori);

module.exports = router;
