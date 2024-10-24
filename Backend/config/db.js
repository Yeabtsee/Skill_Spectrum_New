// config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Function to check database connection
const checkDBConnection = async () => {
  try {
    const connection = await db.getConnection();  // Get connection from the pool
    console.log('Connected to the database successfully!');
    connection.release();  // Release connection back to pool
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

checkDBConnection();

export default db;
