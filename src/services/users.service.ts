import { QueryError } from 'mysql2';

import db from '@/db/db';
import {
  SERVER_ERROR_RESPONSE,
  STATUS_CODE_SUCCESS,
} from '@/constants/constants';
import { REGISTER_QUERY } from '@/queries/users.queries';
import {
  USER_ACCESS_DENIED_RESPONSE,
  USER_EMAIL_EXIST_RESPONSE,
  USER_EMAIL_NO_EXIST_RESPONSE,
  USER_REGISTER_SUCCESS_RESPONSE,
} from '@/constants/users.constants';
import {
  UserLoginResponse,
  UserRegisterResponse,
  UserRequest,
} from '@/interfaces/users.interface';
import {
  handleGenerateToken,
  handleUserExistance,
  handleUserExistanceByEmail,
  handleUserPasswordHashedReversal,
  handleUserPasswordHashing,
} from '@/utils/users.utils';

export const handleRegister = async ({
  email,
  password,
}: UserRequest): Promise<UserRegisterResponse> => {
  try {
    const user = await handleUserExistanceByEmail(email);
    if (user) return USER_EMAIL_EXIST_RESPONSE;

    const hashedPassword = handleUserPasswordHashing(password);

    new Promise<void>((resolve, reject) => {
      db.query(
        REGISTER_QUERY,
        [email, hashedPassword],
        (err: QueryError, result: any) => {
          if (err) return reject(SERVER_ERROR_RESPONSE);

          resolve();
        }
      );
    });
    return USER_REGISTER_SUCCESS_RESPONSE;
  } catch (err) {
    console.error(err);
  }
};

export const handleLogin = async ({
  email,
  password,
}: UserRequest): Promise<UserLoginResponse> => {
  try {
    const isEmailValid = await handleUserExistanceByEmail(email);
    if (!isEmailValid) return USER_EMAIL_NO_EXIST_RESPONSE;

    const validPassword = handleUserPasswordHashedReversal(
      password,
      isEmailValid.password
    );

    if (!validPassword) {
      return USER_ACCESS_DENIED_RESPONSE;
    }

    const generatedToken = handleGenerateToken({
      email,
      id: isEmailValid.id,
    });

    const user = await handleUserExistance(email, validPassword);
    if (!user) return USER_ACCESS_DENIED_RESPONSE;

    return {
      data: {
        user,
        access_token: generatedToken,
      },
      status: STATUS_CODE_SUCCESS,
    };
  } catch (err) {
    console.error(err);
  }
};
