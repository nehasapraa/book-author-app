import express from 'express';
var books = express.Router();

import getBooks from './v1/book/getBooks';
import addBook from './v1/book/addBook';

books.get('/books', getBooks.getAllBooks);
books.get("/books?q=:searchterm", getBooks.getAllBooks);
books.post('/books', addBook.addBooks);

export default books;