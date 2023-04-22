import express from 'express';
import { getPosts } from '../controllers/postsController.js';

import controller from '../controllers/postsController.js';

//create  arouter application, store router functionality in variable
const router = express.Router();

//ROOT ROUTE : you can recognize this by the '/' (nothing else than the '/')
router.get('/', controller.getPosts);

//CREATE ROUTE 
router.post('/create', controller.createPost)

export default router;

