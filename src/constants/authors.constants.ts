import { STATUS_CODE_FAILED, STATUS_CODE_SUCCESS } from './constants';

export const AUTHOR_NO_EXIST_RESPONSE = {
  status: STATUS_CODE_FAILED,
  message: 'There is no author with this id',
};

export const AUTHOR_EXIST_RESPONSE = {
  status: STATUS_CODE_FAILED,
  message: 'There is already author with this name',
};

export const ADD_AUTHOR_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'The author was added',
};

export const UPDATE_AUTHOR_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'The author was updated',
};

export const DELETE_AUTHOR_RESPONSE = {
  status: STATUS_CODE_SUCCESS,
  message: 'The author was deleted',
};

export const AUTHOR_NAME_MESSAGE = 'name must contain min 4 characters!';
export const AUTHOR_BIOGRAHPY_MESSAGE =
  'biography must contain min 15 characters!';
export const AUTHOR_BIRTH_DATE_MESSAGE = 'birth date must be valid Date!';
