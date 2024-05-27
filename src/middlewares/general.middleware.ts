import { INVALID_ID_MESSAGE, STATUS_CODE_INVALID } from '@/constants/constants';
import { NextFunction, Request, Response } from 'express';

export const handleIdValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!id || !Number(id)) {
    return res
      .status(STATUS_CODE_INVALID)
      .send({ message: INVALID_ID_MESSAGE });
  }

  next();
};
