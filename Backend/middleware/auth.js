// middleware/auth.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];  // Get token from 'Bearer <token>'
  
  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);  // Verify token
    req.user = verified;  // Attach user info to the request
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};
