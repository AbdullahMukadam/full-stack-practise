import express from 'express';
import { blogsController } from '../controllers/blogs.controller.js';

const router = express.Router();

router.get('/', blogsController);

export default router;
