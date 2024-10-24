// routes/courses.js
import express from 'express';
import pool from '../config/db.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// routes/courses.js
router.get('/', verifyToken, async (req, res) => {
    try {
      const [courses] =await pool.query('SELECT * FROM courses');
      res.status(200).json(courses);
    } catch (error) {
      console.error('Error retrieving courses:', error);  // Log the error
      res.status(500).json({ error: 'Failed to retrieve courses' });
    }
  });
export default router;
