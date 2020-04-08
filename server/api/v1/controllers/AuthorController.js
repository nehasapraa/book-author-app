import AuthorService from '../services/author.service';

export class AuthorController {
  all(req, res) {
    return AuthorService.all().then(r => res.json(r));
  }
}
export default new AuthorController();
