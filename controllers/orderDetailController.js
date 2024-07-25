const OrderDetail = require('../models/OrderDetail');

// Create new order detail
exports.createOrderDetail = async (req, res) => {
  try {
    const orderDetail = new OrderDetail(req.body);
    await orderDetail.save();
    res.status(201).send(orderDetail);
  } catch (error) {
    res.status(400).send({ error: 'Gagal membuat detail pesanan', details: error.message });
  }
};

// Get all order details
exports.getAllOrderDetail = async (req, res) => {
  try {
    const orderDetails = await OrderDetail.find().populate('idproduk');
    res.status(200).send(orderDetails);
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil detail pesanan', details: error.message });
  }
};

// Get order detail by ID
exports.getOrderDetailById = async (req, res) => {
  try {
    const orderDetail = await OrderDetail.findById(req.params.id).populate('idproduk');
    if (!orderDetail) {
      return res.status(404).send({ error: 'Detail pesanan tidak ditemukan' });
    }
    res.status(200).send(orderDetail);
  } catch (error) {
    res.status(500).send({ error: 'Gagal mengambil detail pesanan', details: error.message });
  }
};

// Update order detail by ID
exports.updateOrderDetail = async (req, res) => {
  try {
    const orderDetail = await OrderDetail.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!orderDetail) {
      return res.status(404).send({ error: 'Detail pesanan tidak ditemukan' });
    }
    res.status(200).send(orderDetail);
  } catch (error) {
    res.status(400).send({ error: 'Gagal memperbarui detail pesanan', details: error.message });
  }
};

// Delete order detail by ID
exports.deleteOrderDetail = async (req, res) => {
  try {
    const orderDetail = await OrderDetail.findByIdAndDelete(req.params.id);
    if (!orderDetail) {
      return res.status(404).send({ error: 'Detail pesanan tidak ditemukan' });
    }
    res.status(200).send(orderDetail);
  } catch (error) {
    res.status(500).send({ error: 'Gagal menghapus detail pesanan', details: error.message });
  }
};
