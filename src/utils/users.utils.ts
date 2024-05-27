import { QueryError, RowDataPacket } from 'mysql2';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

import config from '@/config/config';
import db from '@/db/db';
import {
  FIND_USER_BY_EMAIL,
  FIND_USER_BY_PASSWORD,
  FIND_USER_QUERY,
} from '@/queries/users.queries';
import {
  PasswordHash,
  PasswordHashedReversalResponse,
  User,
  UserRequest,
} from '@/interfaces/users.interface';
import { SERVER_ERROR_RESPONSE } from '@/constants/constants';
import { USER_ACCESS_DENIED_RESPONSE } from '@/constants/users.constants';
import { Request, Response } from 'express';

const {
  token: { secret_key },
} = config;

export const handleUserExistanceByEmail = async (
  email: string
): Promise<User> => {
  try {
    const users = await new Promise((resolve, reject) => {
      db.query(
        FIND_USER_BY_EMAIL,
        [email],
        (err: QueryError, result: RowDataPacket[]) => {
          if (err) return resolve(SERVER_ERROR_RESPONSE);

          resolve(result);
        }
      );
    });
    return users[0];
  } catch (err) {
    console.error(err);
  }
};

export const handleUserExistance = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const users = await new Promise((resolve, reject) => {
      db.query(
        FIND_USER_QUERY,
        [email, password],
        (err: QueryError, result: RowDataPacket[]) => {
          if (err) return resolve(SERVER_ERROR_RESPONSE);

          resolve(result);
        }
      );
    });
    return users[0];
  } catch (err) {
    console.error(err);
  }
};

export const handleUserPasswordHashing = (password: string): string => {
  if (!password) {
    throw new Error('invalid params, password is required!');
  }
  try {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    return hashedPassword;
  } catch (err) {
    console.error(err);
  }
};

export const handleUserPasswordHashedReversal = (
  password: string,
  hashedPassword: string
): string | undefined => {
  if (!password || !hashedPassword) {
    throw new Error('invalid params, password is required!');
  }

  try {
    const reversalHashedPassword = CryptoJS.SHA256(password).toString();

    if (hashedPassword === reversalHashedPassword) {
      return hashedPassword;
    }
  } catch (err) {
    console.error(err);
  }
};

export const handleGenerateToken = (data: PasswordHash): string => {
  if (!data) {
    throw new Error('invalid params');
  }
  try {
    const token = jwt.sign(data, secret_key);
    return token;
  } catch (err) {
    console.error(err);
  }
};
