import express from 'express';
const app = express();

import blogRouter from './routes/blogs.routes.js';
import { connectDb } from './dB/connectDb.js';

connectDb();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', blogRouter);

app.listen(3000);
