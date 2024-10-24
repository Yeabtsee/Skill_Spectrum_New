import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import coursesRoute from './Routes/courses.js';
import testimonialsRoute from './Routes/testimonials.js';
import db from './config/db.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', coursesRoute);
app.use('/api/testimonials', testimonialsRoute);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Skill Spectrum API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});