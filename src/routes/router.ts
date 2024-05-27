import express from 'express';

import usersRouter from '@/routes/users.router';
import booksRouter from '@/routes/books.router';
import authorsRouter from '@/routes/authors.router';
import { handleTokenValidation } from '@/middlewares/users.middleware';

const router = express();

router.use(usersRouter);
router.use(handleTokenValidation);
router.use(booksRouter);
router.use(authorsRouter);

export default router;
