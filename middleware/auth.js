const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Middleware untuk memeriksa token dan hak akses
const authenticateToken = (roles = []) => {
    return async (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        jwt.verify(token, 'your_jwt_secret', async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            req.user = decoded;
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Access denied' });
            }
            next();
        });
    };
};


function verifyToken(requiredRoles) {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(403).send('Access denied');

        jwt.verify(token, 'your_jwt_secret', (err, user) => {
            if (err) return res.status(403).send('Invalid token');

            req.user = user;
            
            // Periksa apakah peran pengguna termasuk dalam peran yang diperlukan
            if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
                return res.status(403).send('Access denied');
            }

            next();
        });
    };
}

module.exports =  {
    verifyToken,
    authenticateToken
};

