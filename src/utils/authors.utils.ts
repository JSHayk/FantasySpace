import { SERVER_ERROR_RESPONSE } from '@/constants/constants';
import db from '@/db/db';

import { Author } from '@/interfaces/authors.interface';
import {
  GET_AUTHOR_BY_NAME_QUERY,
  GET_AUTHOR__QUERY,
} from '@/queries/authors.queries';
import { QueryError, RowDataPacket } from 'mysql2';

export const handleAuthorExistanceById = async (
  id: number
): Promise<Author> => {
  try {
    const authors = await new Promise((resolve, reject) => {
      db.query(
        GET_AUTHOR__QUERY,
        [id],
        (err: QueryError, result: RowDataPacket[]) => {
          if (err) return resolve(SERVER_ERROR_RESPONSE);

          resolve(result);
        }
      );
    });

    return authors[0];
  } catch (err) {
    console.error(err);
  }
};

export const handleAuthorExistanceByName = async (
  name: string
): Promise<Author> => {
  try {
    const authors = await new Promise((resolve, reject) => {
      db.query(
        GET_AUTHOR_BY_NAME_QUERY,
        [name],
        (err: QueryError, result: RowDataPacket[]) => {
          if (err) return resolve(SERVER_ERROR_RESPONSE);

          resolve(result);
        }
      );
    });

    return authors[0];
  } catch (err) {
    console.error(err);
  }
};
