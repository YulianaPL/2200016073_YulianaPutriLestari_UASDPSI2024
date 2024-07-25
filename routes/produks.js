// routes/produk.js
const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');
const { authenticateToken } = require('../middleware/auth');


router.get('/',authenticateToken(['admin', 'user']), produkController.getAllProduk);
router.get('/:id',produkController.getProdukById);
router.post('/',authenticateToken(['admin']), produkController.createProduk);
router.put('/:id', authenticateToken(['admin']), produkController.updateProduk);
router.delete('/:id',authenticateToken(['admin']), produkController.deleteProduk);

module.exports = router;
