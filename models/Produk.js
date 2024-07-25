const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const produkSchema = new mongoose.Schema({
    idproduk: {
        type: Number,
        unique: true
    },
    idkategori: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Kategori',
        required: true
    },
    namaproduk: {
        type: String,
        required: true
    },
    gambar: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    tgldibuat: {
        type: Date,
        default: Date.now
    }
});

produkSchema.plugin(AutoIncrement, { inc_field: 'idproduk', start_seq: 1 });


const Produk = mongoose.model('Produk', produkSchema);

module.exports = Produk;
