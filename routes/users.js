const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController');

// Rute untuk login
router.post('/login', authController.login);

// Rute untuk registrasi
router.post('/register', authController.register);

// Rute untuk verifikasi token
router.get('/verify', authController.verifyToken, (req, res) => {
    res.json({ message: 'Token is valid!' });
});

module.exports = router;
