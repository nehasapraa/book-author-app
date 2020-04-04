import Author from '../../../../models/Author';

class getAuthors {
  static getAllAuthors(req, res, next) {
  Author
    .fetchAll({withRelated: ['books']})
    .then((authors)=>{
      res.json(authors);
    }).catch(err => next(err));
  }
}
export default getAuthors;