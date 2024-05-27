import express from 'express';

import {
  addAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from '@/controllers/authors.controller';
import { handleIdValidation } from '@/middlewares/general.middleware';
import { handleAuthorValidation } from '@/middlewares/authors.middleware';

const router = express();

router.get('/authors', getAuthors);
router.get('/authors/:id', handleIdValidation, getAuthor);

router.post('/authors', handleAuthorValidation, addAuthor);

router.put('/authors/:id', handleAuthorValidation, updateAuthor);

router.delete('/authors/:id', handleIdValidation, deleteAuthor);

export default router;
