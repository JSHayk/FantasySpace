import { NextFunction, Response } from 'express';
import validator from 'validator';

import {
  AUTHOR_BIOGRAHPY_MESSAGE,
  AUTHOR_BIRTH_DATE_MESSAGE,
  AUTHOR_NAME_MESSAGE,
} from '@/constants/authors.constants';
import { STATUS_CODE_INVALID } from '@/constants/constants';
import { ExtendedAuthorRequest } from '@/interfaces/authors.interface';

export const handleAuthorValidation = (
  req: ExtendedAuthorRequest,
  res: Response,
  next: NextFunction
) => {
  const { name, biography, birth_date } = req.body;
  const date = new Date(birth_date);

  if (typeof name !== 'string' || !validator.isLength(name, { min: 4 })) {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: AUTHOR_NAME_MESSAGE });
  }

  if (
    typeof biography !== 'string' ||
    !validator.isLength(biography, { min: 15 })
  ) {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: AUTHOR_BIOGRAHPY_MESSAGE });
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: AUTHOR_BIRTH_DATE_MESSAGE });
  }

  req.author = { name, biography, birth_date: date };
  next();
};
