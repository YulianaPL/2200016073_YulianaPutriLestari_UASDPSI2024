const Cart = require('../models/Cart');

// Create a new Cart
exports.createCart = async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all Carts
exports.getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find().populate('userid');
        res.json(carts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single Cart by ID
exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate('userid');
        if (cart == null) {
            return res.status(404).json({ message: 'Cannot find cart' });
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a Cart
exports.updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedCart == null) {
            return res.status(404).json({ message: 'Cannot find cart' });
        }
        res.json(updatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a Cart
exports.deleteCart = async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id);
        if (deletedCart == null) {
            return res.status(404).json({ message: 'Cannot find cart' });
        }
        res.json({ message: 'Deleted cart' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
