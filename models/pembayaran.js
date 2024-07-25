const mongoose = require('mongoose');

const pembayaranSchema = new mongoose.Schema({
    metode: { type: String, required: true },
    norek: { type: String, required: true },
    logo: { type: String, required: true },
    orderid: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pembayaran', pembayaranSchema);
