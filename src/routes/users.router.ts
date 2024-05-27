import express from 'express';

import { login, register } from '@/controllers/users.controller';
import { handleUserValidation } from '@/middlewares/users.middleware';

const router = express();

router.post('/register', handleUserValidation, register);
router.post('/login', handleUserValidation, login);

export default router;
