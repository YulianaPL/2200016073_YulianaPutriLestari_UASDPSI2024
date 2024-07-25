const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController');

// Endpoint untuk login
router.post('/login', authController.login);

// Endpoint untuk registrasi
router.post('/register', authController.register);

// Endpoint untuk verifikasi token
router.get('/verify', authController.verifyToken, (req, res) => {
    res.json({ message: 'Token is valid!' });
});

module.exports = router;
