const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const kategorisRoutes = require('./routes/kategoris');
const produksRoutes = require('./routes/produks');
const orderDetailsRoutes = require('./routes/orderDetails');
const cartsRoutes = require('./routes/carts');
const usersRoutes = require('./routes/users');
const konfirmasisRoutes = require('./routes/konfirmasis');
const pembayaransRoutes = require('./routes/pembayarans');
const authsRoutes = require('./routes/auths'); 

 // Tambahkan ini

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/kategori', kategorisRoutes);
app.use('/produk', produksRoutes);
app.use('/orderDetail', orderDetailsRoutes);
app.use('/cart', cartsRoutes);
app.use('/auth', authsRoutes); // Ubah ini
app.use('/konfirmasi', konfirmasisRoutes);
app.use('/pembayaran', pembayaransRoutes);
app.use('/user', usersRoutes);

// Database Connection
mongoose.connect('mongodb+srv://uas-dpsi:yuli17@uas-dpsi-2024.afi7k05.mongodb.net/?retryWrites=true&w=majority&appName=uas-dpsi-2024')

.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});



// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
