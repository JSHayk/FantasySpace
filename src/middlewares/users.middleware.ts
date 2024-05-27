import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import config from '@/config/config';
import {
  ExtendedTokenRequest,
  ExtendedUserRequest,
  PasswordHash,
} from '@/interfaces/users.interface';
import {
  STATUS_CODE_ACCESS_DENIED,
  STATUS_CODE_FAILED,
  STATUS_CODE_SERVER_ERROR,
} from '@/constants/constants';
import {
  USER_EMAIL_MESSAGE,
  USER_INVALID_TOKEN_MESSAGE,
  USER_PASSWORD_MESSAGE,
} from '@/constants/users.constants';

const {
  token: { secret_key },
} = config;

export const handleUserValidation = (
  req: ExtendedUserRequest,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email)
    return res
      .status(STATUS_CODE_FAILED)
      .send({ message: 'email is required!' });

  if (!password)
    return res
      .status(STATUS_CODE_FAILED)
      .send({ message: 'password is required!' });

  if (!validator.isEmail(email)) {
    return res.status(STATUS_CODE_FAILED).send({ message: USER_EMAIL_MESSAGE });
  }

  if (!validator.isStrongPassword(password)) {
    return res
      .status(STATUS_CODE_FAILED)
      .send({ message: USER_PASSWORD_MESSAGE });
  }

  req.data = {
    email,
    password,
  };

  next();
};

export const handleTokenValidation = (
  req: ExtendedTokenRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(STATUS_CODE_ACCESS_DENIED)
        .json({ message: 'Unauthorized: No token provided' });
    }

    const token: string = authHeader.split(' ')[1];

    jwt.verify(token, secret_key, (err, decoded: PasswordHash) => {
      if (err) {
        return res
          .status(STATUS_CODE_ACCESS_DENIED)
          .json({ message: USER_INVALID_TOKEN_MESSAGE });
      }

      req.userId = decoded.id;
      next();
    });
  } catch (err) {
    return res
      .status(STATUS_CODE_SERVER_ERROR)
      .send({ message: 'Server error' });
  }
};
