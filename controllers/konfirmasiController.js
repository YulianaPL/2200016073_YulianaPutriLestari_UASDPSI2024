const Konfirmasi = require('../models/konfirmasi');

// Create a new konfirmasi
exports.createKonfirmasi = async (req, res) => {
    try {
        const newKonfirmasi = new Konfirmasi(req.body);
        const savedKonfirmasi = await newKonfirmasi.save();
        res.status(201).json(savedKonfirmasi);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all konfirmasi
exports.getAllKonfirmasi = async (req, res) => {
    try {
        const konfirmasis = await Konfirmasi.find().populate('userid pembayaranid');
        res.status(200).json(konfirmasis);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get konfirmasi by ID
exports.getKonfirmasiById = async (req, res) => {
    try {
        const konfirmasi = await Konfirmasi.findById(req.params.id).populate('userid pembayaranid');
        if (konfirmasi) {
            res.status(200).json(konfirmasi);
        } else {
            res.status(404).json({ message: 'Konfirmasi not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update konfirmasi by ID
exports.updateKonfirmasi = async (req, res) => {
    try {
        const updatedKonfirmasi = await Konfirmasi.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('userid pembayaranid');
        if (updatedKonfirmasi) {
            res.status(200).json(updatedKonfirmasi);
        } else {
            res.status(404).json({ message: 'Konfirmasi not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete konfirmasi by ID
exports.deleteKonfirmasi = async (req, res) => {
    try {
        const deletedKonfirmasi = await Konfirmasi.findByIdAndDelete(req.params.id);
        if (deletedKonfirmasi) {
            res.status(200).json({ message: 'Konfirmasi deleted' });
        } else {
            res.status(404).json({ message: 'Konfirmasi not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
