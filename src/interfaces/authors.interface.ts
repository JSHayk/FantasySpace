import { Request } from 'express';

export interface Author {
  id: number;
  name: string;
  biography: string;
  birth_date: Date;
}

export interface AuthorResponse {
  data?: Author;
  message?: string;
  status: number;
}

export interface AuthorRequest {
  name: string;
  biography: string;
  birth_date: Date;
}

export interface AuthorsResponse {
  data?: Author[];
  message?: string;
  status: number;
}

export interface ExtendedAuthorRequest extends Request {
  author?: AuthorRequest;
  body: AuthorRequest;
}
