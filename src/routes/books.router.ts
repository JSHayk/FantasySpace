import express from 'express';

import {
  getBooks,
  getBook,
  addBook,
  deleteBook,
  updateBook,
} from '@/controllers/books.controller';
import {
  handleBookAuthorValidation,
  handleBookValidation,
} from '@/middlewares/books.middleware';
import { handleIdValidation } from '@/middlewares/general.middleware';

const router = express();

router.get('/books', getBooks);
router.get('/books/:id', handleIdValidation, getBook);

router.post(
  '/books',
  handleBookValidation,
  handleBookAuthorValidation,
  addBook
);

router.put('/books/:id', handleIdValidation, handleBookValidation, updateBook);

router.delete('/books/:id', handleIdValidation, deleteBook);

export default router;
