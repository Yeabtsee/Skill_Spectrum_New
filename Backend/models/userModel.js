import bcrypt from 'bcrypt';
import db from '../config/db.js';

export const createUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  return new Promise((resolve, reject) => {
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const findUserByEmail = (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, result) => {
      if (err) reject(err);
      else resolve(result[0]);
    });
  });
};
