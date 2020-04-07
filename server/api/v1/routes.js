import express from 'express';

import BookController from './Controllers/BookController';
import AuthorController from './Controllers/AuthorController';

export default express
  .Router()
  .post('/books', BookController.create)
  .get('/books', BookController.all)
  .get('/authors', AuthorController.all)