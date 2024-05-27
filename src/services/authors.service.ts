import { QueryError } from 'mysql2';

import db from '@/db/db';
import {
  SERVER_ERROR_RESPONSE,
  STATUS_CODE_SUCCESS,
} from '@/constants/constants';
import {
  Author,
  AuthorRequest,
  AuthorResponse,
  AuthorsResponse,
} from '@/interfaces/authors.interface';
import {
  ADD_AUTHOR_QUERY,
  DELETE_AUTHOR_QUERY,
  GET_AUTHORS_QUERY,
  UPDATE_AUTHOR_QUERY,
} from '@/queries/authors.queries';
import {
  handleAuthorExistanceById,
  handleAuthorExistanceByName,
} from '@/utils/authors.utils';
import {
  ADD_AUTHOR_RESPONSE,
  AUTHOR_EXIST_RESPONSE,
  AUTHOR_NO_EXIST_RESPONSE,
  DELETE_AUTHOR_RESPONSE,
  UPDATE_AUTHOR_RESPONSE,
} from '@/constants/authors.constants';
import { DELETE_BOOK_AUTHOR_QUERY } from '@/queries/books.queries';

export const handleGetAuthors = async (): Promise<AuthorsResponse> => {
  try {
    return await new Promise<AuthorsResponse>((resolve, reject) => {
      db.query(GET_AUTHORS_QUERY, (err, result: Author[]) => {
        if (err) return reject(SERVER_ERROR_RESPONSE);

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

export const handleGetAuthor = async (id: number): Promise<AuthorResponse> => {
  try {
    const author = await handleAuthorExistanceById(id);

    if (!author) return AUTHOR_NO_EXIST_RESPONSE;

    return {
      data: author,
      status: STATUS_CODE_SUCCESS,
    };
  } catch (err) {
    console.error(err);
  }
};

export const handleAddAuthor = async (
  author: AuthorRequest
): Promise<AuthorResponse> => {
  const { name, biography, birth_date } = author;

  console.log(author);

  try {
    const isAuthorExist = await handleAuthorExistanceByName(name);
    if (isAuthorExist) return AUTHOR_EXIST_RESPONSE;

    return await new Promise<AuthorResponse>((resolve, reject) => {
      db.query(
        ADD_AUTHOR_QUERY,
        [name, biography, birth_date],
        (err: QueryError, result: any) => {
          console.log(err);
          if (err) return resolve(SERVER_ERROR_RESPONSE);

          console.log(result);

          return resolve(ADD_AUTHOR_RESPONSE);
        }
      );
    });
  } catch (err) {
    console.error(err);
  }
};

export const handleUpdateAuthor = async (
  id: number,
  author: AuthorRequest
): Promise<AuthorResponse> => {
  const { name, biography, birth_date } = author;
  try {
    return await new Promise((resolve, reject) => {
      db.query(
        UPDATE_AUTHOR_QUERY,
        [name, biography, birth_date, id],
        (err: QueryError, result: any) => {
          if (err) return resolve(SERVER_ERROR_RESPONSE);

          resolve(UPDATE_AUTHOR_RESPONSE);
        }
      );
    });
  } catch (err) {
    console.error(err);
  }
};

export const handleDeleteAuthor = async (
  id: number
): Promise<AuthorResponse> => {
  try {
    const isAuthorExist = await handleAuthorExistanceById(id);
    if (!isAuthorExist) return AUTHOR_NO_EXIST_RESPONSE;

    return await new Promise((resolve, reject) => {
      db.query(
        DELETE_BOOK_AUTHOR_QUERY,
        [isAuthorExist.id],
        (err: QueryError, result: any) => {
          if (err) return resolve(SERVER_ERROR_RESPONSE);
        }
      );

      db.query(DELETE_AUTHOR_QUERY, [id], (err: QueryError, result: any) => {
        if (err) return resolve(SERVER_ERROR_RESPONSE);
        resolve(DELETE_AUTHOR_RESPONSE);
      });
    });
  } catch (err) {
    console.error(err);
  }
};
