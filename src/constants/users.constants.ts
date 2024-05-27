import {
  STATUS_CODE_ACCESS_DENIED,
  STATUS_CODE_FAILED,
  STATUS_CODE_SUCCESS,
} from '@/constants/constants';

export const USER_REGISTER_SUCCESS_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'User was registered',
};

export const USER_EMAIL_EXIST_RESPONSE = {
  status: STATUS_CODE_FAILED,
  message: 'The email is already exist!',
};

export const USER_EMAIL_NO_EXIST_RESPONSE = {
  status: STATUS_CODE_FAILED,
  message: 'The email doesn"t exits!',
};

export const USER_ACCESS_DENIED_RESPONSE = {
  status: STATUS_CODE_ACCESS_DENIED,
  message: 'The password is invalid!',
};

export const USER_EMAIL_MESSAGE = 'invalid email';
export const USER_PASSWORD_MESSAGE = 'invalid password';
export const USER_INVALID_TOKEN_MESSAGE = 'Unauthorized: Invalid token';
