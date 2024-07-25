// controllers/produkController.js
const Produk = require('../models/Produk');

// Create new product
exports.createProduk = async (req, res) => {
  try {
    const produk = new Produk(req.body);
    await produk.save();
    res.status(201).send(produk);
  } catch (error) {
    res.status(400).send({ error: 'Gagal membuat produk', details: error.message });
  }
};

// Get all products
exports.getAllProduk = async (req, res) => {
  try {
    const produk = await Produk.find().populate('idkategori');
    res.status(200).send(produk);
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil produk', details: error.message });
  }
};

// Get product by ID
exports.getProdukById = async (req, res) => {
  try {
    const produk = await Produk.findById(req.params.id).populate('idkategori');
    if (!produk) {
      return res.status(404).send({ error: 'Produk tidak ditemukan' });
    }
    res.status(200).send(produk);
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil produk', details: error.message });
  }
};

// Update product by ID
exports.updateProduk = async (req, res) => {
  try {
    const produk = await Produk.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!produk) {
      return res.status(404).send({ error: 'Produk tidak ditemukan' });
    }
    res.status(200).send(produk);
  } catch (error) {
    res.status(400).send({ error: 'Gagal memperbarui produk', details: error.message });
  }
};

// Delete product by ID
exports.deleteProduk = async (req, res) => {
  try {
    const produk = await Produk.findByIdAndDelete(req.params.id);
    if (!produk) {
      return res.status(404).send({ error: 'Produk tidak ditemukan' });
    }
    res.status(200).send(produk);
  } catch (error) {
    res.status(500).send({ error: 'Gagal menghapus produk', details: error.message });
  }
};
