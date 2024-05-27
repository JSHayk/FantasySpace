import { Request } from 'express';

export interface Book {
  id: number;
  title: string;
  published_at: Date;
  author_id: number;
  isbn: string;
}

export interface BooksResonse {
  data?: Book[];
  status: number;
  message?: string;
}

export interface BookResponse {
  data?: Book;
  status: number;
  message?: string;
}

export interface BookRequest {
  title: string;
  published_at: Date;
  isbn: string;
  author_id?: number;
}

export interface ExtendedBookRequest extends Request {
  data?: BookRequest;
  body: BookRequest;
}
