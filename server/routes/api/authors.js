import express from 'express';
var authors = express.Router();

import getAuthors from './v1/author/getAuthors';

authors.get('/authors', getAuthors.getAllAuthors);

export default authors;