const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Definisikan schema
const OrderDetailSchema = new Schema({
    orderid: { type: String, required: true },
    idproduk: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true }
});

// Tambahkan plugin AutoIncrement ke schema
OrderDetailSchema.plugin(AutoIncrement, { inc_field: 'detail_id', start_seq: 1 });

// Buat dan ekspor model
const OrderDetail = mongoose.model('OrderDetail', OrderDetailSchema);
module.exports = OrderDetail;
