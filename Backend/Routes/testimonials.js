// routes/testimonials.js
import express from 'express';
import pool from '../config/db.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, async (req, res) => {
  const { testimonial } = req.body;
  const userId = req.user.id;
  
  try {
    await pool.query('INSERT INTO testimonials (user_id, testimonial) VALUES (?, ?)', [userId, testimonial]);
    res.status(201).json({ message: 'Testimonial submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to post testimonial' });
  }
});

export default router;
