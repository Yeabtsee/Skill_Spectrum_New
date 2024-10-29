// src/utils/tokenUtils.js
import jwt from 'jsonwebtoken';

export const validateToken = (token, callback) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return callback(err);
        }
        // If valid, return the user ID
        callback(null, decoded.userId);
    });
};
