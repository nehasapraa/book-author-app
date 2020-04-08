import client from '../../../../elasticsearch/connection';

class ElasticsearchService {
  create(book) {
    return client.index({
      index: process.env.ELASTICSEARCH_INDEX_ENV,
      type: 'books',
      body: book,
    });
  }
  search(term) {
    return client
      .search({
        index: process.env.ELASTICSEARCH_INDEX_ENV,
        type: 'books',
        body: {
          query: {
            multi_match: {
              query: term.q,
              fields: ['title', 'book_description', 'author_name'],
              operator: 'or',
            },
          },
        },
      })
      .then(response => {
        let results = response['hits']['hits'].map(hit => hit._source);
        return results;
      });
  }
}
export default new ElasticsearchService();
