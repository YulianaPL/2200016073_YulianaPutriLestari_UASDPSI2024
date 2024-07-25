const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    orderid: { type: String, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', required: true },
    tglorder: { type: Date, default: Date.now },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Cart', cartSchema);
