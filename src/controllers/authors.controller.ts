import { Request, Response } from 'express';

import {
  handleAddAuthor,
  handleDeleteAuthor,
  handleGetAuthor,
  handleGetAuthors,
  handleUpdateAuthor,
} from '@/services/authors.service';
import { ExtendedAuthorRequest } from '@/interfaces/authors.interface';

export const getAuthors = async (req: Request, res: Response) => {
  const { data, status, message } = await handleGetAuthors();

  res.status(status).send(data || { message });
};

export const getAuthor = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  const { data, message, status } = await handleGetAuthor(Number(id));

  res.status(status).send(data || { message });
};

export const addAuthor = async (req: ExtendedAuthorRequest, res: Response) => {
  const { status, message } = await handleAddAuthor(req.author);

  console.log({ status, message });

  res.status(status).send({ message });
};

export const updateAuthor = async (
  req: ExtendedAuthorRequest,
  res: Response
) => {
  const { id } = req.params;
  const { status, message } = await handleUpdateAuthor(Number(id), req.author);

  res.status(status).send({ message });
};

export const deleteAuthor = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  const { status, message } = await handleDeleteAuthor(Number(id));

  res.status(status).send({ message });
};
