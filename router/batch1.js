import express from 'express';
import * as batchController from '../controller/batch1.js';
import { tokenValidation } from '../controller/auth.js';

const router = express.Router();

router.post('/create',batchController.controlCreateBatch1)
router.get("/all",tokenValidation,batchController.ctrlSelectAllData)

export default router