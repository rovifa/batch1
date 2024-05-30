import express from 'express';
import * as batchController from '../controller/batch1.js';

const router = express.Router();

router.post('/create',batchController.controlCreateBatch1)

export default router