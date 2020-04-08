import express from 'express';

import BookController from './controllers/BookController';
import AuthorController from './controllers/AuthorController';

export default express
  .Router()
  .post('/books', BookController.create)
  .get('/books', BookController.all)
  .get('/authors', AuthorController.all);
