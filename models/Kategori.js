const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const kategoriSchema = new mongoose.Schema({
    namakategori: {
        type: String,
        required: true
    },
    tgldibuat: {
        type: Date,
        default: Date.now
    }
});

kategoriSchema.plugin(AutoIncrement, { inc_field: 'idkategori', start_seq: 1 });

const Kategori = mongoose.model('Kategori', kategoriSchema);

module.exports = Kategori;
