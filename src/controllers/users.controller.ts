import { Response } from 'express';

import { ExtendedUserRequest } from '@/interfaces/users.interface';
import { handleLogin, handleRegister } from '@/services/users.service';

export const register = async (req: ExtendedUserRequest, res: Response) => {
  const { email, password } = req.data;
  const { status, message } = await handleRegister({ email, password });

  res.status(status).send({ message });
};

export const login = async (req: ExtendedUserRequest, res: Response) => {
  const { email, password } = req.data;
  const { data, status, message } = await handleLogin({ email, password });

  if (data) {
    res.cookie('access_token', data.access_token, {
      httpOnly: true,
      secure: true,
    });
  }
  res.status(status).send(data || { message });
};
