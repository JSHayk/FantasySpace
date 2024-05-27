import { QueryError, RowDataPacket } from 'mysql2';

import db from '@/db/db';
import {
  SERVER_ERROR_RESPONSE,
  STATUS_CODE_SUCCESS,
} from '@/constants/constants';
import { FIND_BOOK_QUERY } from '@/queries/books.queries';
import { Book, BooksResonse } from '@/interfaces/books.interface';

export const handleBookExistanceByEmail = async (
  id: number
): Promise<BooksResonse> => {
  if (!id) throw new Error('invalid params, must provide id!');

  const books = await new Promise((resolve, reject) => {
    db.query(
      FIND_BOOK_QUERY,
      [id],
      (err: QueryError | null, result: RowDataPacket[]) => {
        if (err) return resolve(SERVER_ERROR_RESPONSE);

        resolve(result);
      }
    );
  });
  return {
    data: books as Book[],
    status: STATUS_CODE_SUCCESS,
  };
};
