import express from 'express';
import Books from './books';
import Authors from './authors';

var router = express.Router();

router.get('/books', Books);
router.post('/books', Books);
router.get('/authors', Authors);

export default router;