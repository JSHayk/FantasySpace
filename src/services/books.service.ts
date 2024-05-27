import { QueryError } from 'mysql2';

import db from '@/db/db';
import { handleBookExistanceByEmail } from '@/utils/books.utils';
import {
  Book,
  BookRequest,
  BookResponse,
  BooksResonse,
} from '@/interfaces/books.interface';
import {
  SERVER_ERROR_RESPONSE,
  STATUS_CODE_SUCCESS,
} from '@/constants/constants';
import {
  BOOKS_ADD_RESPONSE,
  BOOKS_DELETE_RESPONSE,
  BOOKS_EMPTY_RESPONSE,
  BOOKS_FAILED_RESPONSE,
  BOOKS_UPDATE_RESPONSE,
} from '@/constants/books.constants';
import {
  ADD_BOOK_QUERY,
  DELETE_BOOK_QUERY,
  GET_BOOKS_QUERY,
  UPDATE_BOOK_QUERY,
} from '@/queries/books.queries';

export const handleGetBooks = async (): Promise<BooksResonse> => {
  try {
    return new Promise((resolve, reject) => {
      db.query(GET_BOOKS_QUERY, (err: QueryError, result: Book[]) => {
        if (err) {
          return reject(SERVER_ERROR_RESPONSE);
        }

        if (!result.length) return resolve(BOOKS_EMPTY_RESPONSE);

        return resolve({
          status: STATUS_CODE_SUCCESS,
          data: result,
        });
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export const handleGetBook = async (id: number): Promise<BookResponse> => {
  try {
    const { data, status, message } = await handleBookExistanceByEmail(id);

    if (status !== STATUS_CODE_SUCCESS) {
      return {
        status,
        message,
      };
    }

    if (!data.length) {
      return BOOKS_FAILED_RESPONSE;
    }

    return {
      data: data[0],
      status: STATUS_CODE_SUCCESS,
    };
  } catch (err) {
    console.error(err);
  }
};

export const handleAddBook = async (
  data: BookRequest
): Promise<BookResponse> => {
  const { title, published_at, isbn, author_id } = data;
  const values = [title, published_at, isbn, author_id];

  try {
    return new Promise((resolve, reject) => {
      db.query(ADD_BOOK_QUERY, values, (err: QueryError) => {
        if (err) return reject(SERVER_ERROR_RESPONSE);

        return resolve(BOOKS_ADD_RESPONSE);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export const handleUpdateBook = async (
  id: number,
  data: BookRequest
): Promise<BookResponse> => {
  const { title, published_at, isbn } = data;

  try {
    new Promise<void>((resolve, reject) => {
      db.query(
        UPDATE_BOOK_QUERY,
        [title, published_at, isbn, id],
        (err: QueryError, result: any) => {
          if (err) {
            return reject(SERVER_ERROR_RESPONSE);
          }

          resolve();
        }
      );
    });
    return BOOKS_UPDATE_RESPONSE;
  } catch (err) {
    console.error(err);
  }
};

export const handleDeleteBook = async (id: number): Promise<BookResponse> => {
  try {
    const { data, status, message } = await handleBookExistanceByEmail(id);

    if (status !== STATUS_CODE_SUCCESS) {
      return {
        status,
        message,
      };
    }

    if (!data.length) {
      return BOOKS_FAILED_RESPONSE;
    }

    await new Promise<void>((resolve, reject) => {
      db.query(DELETE_BOOK_QUERY, [id], (err: QueryError) => {
        if (err) {
          return reject(SERVER_ERROR_RESPONSE);
        }
        resolve();
      });
    });

    return BOOKS_DELETE_RESPONSE;
  } catch (error) {
    return error;
  }
};
