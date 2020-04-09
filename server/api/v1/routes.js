import express from 'express';
import { createRules, validate } from './common/validator.js'

import BookController from './controllers/BookController';
import AuthorController from './controllers/AuthorController';

export default express
  .Router()
  .post('/books', createRules(), validate, BookController.create)
  .get('/books', BookController.all)
  .get('/authors', AuthorController.all);
