import { Response, NextFunction } from 'express';
import validator from 'validator';

import { STATUS_CODE_INVALID } from '@/constants/constants';
import { ExtendedBookRequest } from '@/interfaces/books.interface';
import {
  BOOKS_INVALID_AUTHOR_ID,
  BOOKS_ISBN_MESSAGE,
  BOOKS_PUBLISHED_MESSAGE,
  BOOKS_TITLE_MESSAGE,
} from '@/constants/books.constants';

export const handleBookValidation = (
  req: ExtendedBookRequest,
  res: Response,
  next: NextFunction
) => {
  const { title, published_at, isbn } = req.body;
  const date = new Date(published_at);

  if (typeof title !== 'string' || !validator.isLength(title, { min: 3 })) {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: BOOKS_TITLE_MESSAGE });
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: BOOKS_PUBLISHED_MESSAGE });
  }

  if (!validator.isISBN(isbn)) {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: BOOKS_ISBN_MESSAGE });
  }

  req.data = {
    title,
    published_at: date,
    isbn,
  };

  next();
};

export const handleBookAuthorValidation = (
  req: ExtendedBookRequest,
  res: Response,
  next: NextFunction
) => {
  const { author_id } = req.body;
  if (typeof author_id !== 'number') {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: BOOKS_INVALID_AUTHOR_ID });
  }

  req.data.author_id = author_id;
  next();
};
