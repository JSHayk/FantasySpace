import { BookResponse } from '@/interfaces/books.interface';
import { STATUS_CODE_FAILED, STATUS_CODE_SUCCESS } from '@/constants/constants';

export const BOOKS_FAILED_RESPONSE: BookResponse = {
  status: STATUS_CODE_FAILED,
  message: 'There is no book with this id',
};

export const BOOKS_ADD_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'The book was added',
};

export const BOOKS_UPDATE_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'The book was updated',
};

export const BOOKS_DELETE_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'The book was deleted',
};

export const BOOKS_EMPTY_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'The data is empty',
};

export const BOOKS_TITLE_MESSAGE: string =
  'Title must be at least 3 characters long';

export const BOOKS_PUBLISHED_MESSAGE: string =
  'Published Date must be a valid date';

export const BOOKS_ISBN_MESSAGE: string =
  'ISBN must be a valid ISBN-10 or ISBN-13';

export const BOOKS_INVALID_AUTHOR_ID = 'Invalid author_id';
