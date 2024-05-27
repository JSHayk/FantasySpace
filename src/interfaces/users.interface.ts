import { Request } from 'express';

export interface User {
  id: number;
  email: string;
  password: string;
}

export interface UserRequest {
  email: string;
  password: string;
}

export interface UserRegisterResponse {
  status: number;
  message: string;
}

export interface UserLoginResponse {
  status: number;
  message?: string;
  data?: {
    user: User;
    access_token: string;
  };
}

export interface PasswordHash {
  id: number;
  email: string;
}

export interface PasswordHashedReversalResponse {
  status?: number;
  message?: string;
  result?: string;
}

export interface ExtendedTokenRequest extends Request {
  userId?: number;
}

export interface ExtendedUserRequest extends Request {
  data?: UserRequest;
  body: UserRequest;
}
