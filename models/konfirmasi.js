const mongoose = require('mongoose');

const konfirmasiSchema = new mongoose.Schema({
    orderid: { type: String, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    payment: { type: String, required: true },
    namarekening: { type: String, required: true },
    tglbayar: { type: Date, required: true },
    tgldisumit: { type: Date, default: Date.now },
    pembayaranid: { type: mongoose.Schema.Types.ObjectId, ref: 'Pembayaran', required: true } // Tambahkan ini
});

module.exports = mongoose.model('Konfirmasi', konfirmasiSchema);
