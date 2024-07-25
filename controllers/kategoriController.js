// controllers/kategoriController.js
const Kategori = require('../models/Kategori');

// Create new category
exports.createKategori = async (req, res) => {
  try {
    const kategori = new Kategori(req.body);
    await kategori.save();
    res.status(201).send(kategori);
  } catch (error) {
    res.status(400).send({ error: 'Gagal membuat kategori', details: error.message });
  }
};

// Get all categories
exports.getAllKategori = async (req, res) => {
  try {
    const kategori = await Kategori.find();
    res.status(200).send(kategori);
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil kategori', details: error.message });
  }
};

// Get category by ID
exports.getKategoriById = async (req, res) => {
  try {
    const kategori = await Kategori.findById(req.params.id);
    if (!kategori) {
      return res.status(404).send({ error: 'Kategori tidak ditemukan' });
    }
    res.status(200).send(kategori);
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil kategori', details: error.message });
  }
};

// Update category by ID
exports.updateKategori = async (req, res) => {
  try {
    const kategori = await Kategori.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!kategori) {
      return res.status(404).send({ error: 'Kategori tidak ditemukan' });
    }
    res.status(200).send(kategori);
  } catch (error) {
    res.status(400).send({ error: 'Gagal memperbarui kategori', details: error.message });
  }
};

// Delete category by ID
exports.deleteKategori = async (req, res) => {
  try {
    const kategori = await Kategori.findByIdAndDelete(req.params.id);
    if (!kategori) {
      return res.status(404).send({ error: 'Kategori tidak ditemukan' });
    }
    res.status(200).send(kategori);
  } catch (error) {
    res.status(500).send({ error: 'Gagal menghapus kategori', details: error.message });
  }
};
