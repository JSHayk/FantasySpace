import { Request, Response } from 'express';

import { ExtendedBookRequest } from '@/interfaces/books.interface';
import {
  handleGetBooks,
  handleGetBook,
  handleAddBook,
  handleDeleteBook,
  handleUpdateBook,
} from '@/services/books.service';

export const getBooks = async (req: Request, res: Response) => {
  const { data, status, message } = await handleGetBooks();
  res.status(status).send(data || message);
};

export const getBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data, status, message } = await handleGetBook(Number(id));

  res.status(status).send(data || { message });
};

export const addBook = async (req: ExtendedBookRequest, res: Response) => {
  const { message, status } = await handleAddBook(req.data);

  res.status(status).send({ message });
};

export const updateBook = async (req: ExtendedBookRequest, res: Response) => {
  const { id } = req.params;
  const { status, message } = await handleUpdateBook(Number(id), req.data);

  res.status(status).send({ message });
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, message } = await handleDeleteBook(Number(id));

  res.status(status).send({ message });
};
