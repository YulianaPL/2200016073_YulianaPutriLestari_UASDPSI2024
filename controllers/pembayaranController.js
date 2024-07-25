const Pembayaran = require('../models/pembayaran');
const Konfirmasi = require('../models/konfirmasi');

// Create new pembayaran
exports.createPembayaran = async (req, res) => {
  try {
    const pembayaran = new Pembayaran(req.body);
    await pembayaran.save();
    res.status(201).send(pembayaran);
  } catch (error) {
    res.status(400).send({ error: 'Gagal membuat pembayaran', details: error.message });
  }
};

// Get all pembayarans
exports.getAllPembayaran = async (req, res) => {
  try {
    const pembayarans = await Pembayaran.find().populate('orderid userid');
    res.status(200).send(pembayarans);
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil pembayaran', details: error.message });
  }
};

// Get pembayaran by ID
exports.getPembayaranById = async (req, res) => {
  try {
    const pembayaran = await Pembayaran.findById(req.params.id).populate('orderid userid');
    if (!pembayaran) {
      return res.status(404).send({ error: 'Pembayaran tidak ditemukan' });
    }
    const konfirmasis = await Konfirmasi.find({ pembayaranid: pembayaran._id }).populate('userid');
    res.status(200).send({ pembayaran, konfirmasis });
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil pembayaran', details: error.message });
  }
};

// Update pembayaran by ID
exports.updatePembayaran = async (req, res) => {
  try {
    const pembayaran = await Pembayaran.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('orderid userid');
    if (!pembayaran) {
      return res.status(404).send({ error: 'Pembayaran tidak ditemukan' });
    }
    res.status(200).send(pembayaran);
  } catch (error) {
    res.status(400).send({ error: 'Gagal memperbarui pembayaran', details: error.message });
  }
};

// Delete pembayaran by ID
exports.deletePembayaran = async (req, res) => {
  try {
    const pembayaran = await Pembayaran.findByIdAndDelete(req.params.id);
    if (!pembayaran) {
      return res.status(404).send({ error: 'Pembayaran tidak ditemukan' });
    }
    await Konfirmasi.deleteMany({ pembayaranid: pembayaran._id }); // Hapus konfirmasi terkait
    res.status(200).send(pembayaran);
  } catch (error) {
    res.status(500).send({ error: 'Gagal menghapus pembayaran', details: error.message });
  }
};
