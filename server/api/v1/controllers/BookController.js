import BookService from '../services/book.service';

export class BookController {
  all(req, res) {
    if (req.query.q) {
      BookService.search(req.query).then(r => res.json(r));
    } else {
      BookService.all().then(r => res.json(r));
    }
  }
  create(req, res) {
    const book = req.body;
    BookService.create(book).then(r => res.status(201).json(r));
  }
}
export default new BookController();
