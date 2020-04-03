exports.seed = function(knex, Promise) {
return knex('author').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('books').del()
    }).then(function () {
      return knex('author').insert({
        full_name: 'Eric Larson ',
      })
      .returning('id')
    }).then(function (response) {
      return knex('books').insert({
        title: 'Little Fires Everywhere',
        author_id: response[0],
        book_description: 'An artist upends a quiet town outside Cleveland',
        popularity: 24,
        img: 'https://s1.nyt.com/du/books/images/9780735224308.jpg',
      })
      .returning('author_id')
    }).then(function (response) {
        return knex('books').insert({
          title: 'Book two',
          author_id: response[0],
          book_description: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum',
          popularity: 34,
          img: 'https://s1.nyt.com/du/books/images/9780735224308.jpg',
        })
        .returning('author_id')
    }).then(function (response) {
         return knex('books').insert({
           title: 'Book Three',
           author_id: response[0],
           book_description: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum',
           popularity: 44,
           img: 'https://s1.nyt.com/du/books/images/9780735224308.jpg',
         });
    }).then(function () {
      return knex('author').insert({
        full_name: 'Harlan Coben',
      })
      .returning('id')
    }).then(function (response) {
      return knex('books').insert({
        title: 'Educated',
        author_id: response[0],
        book_description: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum',
        popularity: 14,
        img: 'https://s1.nyt.com/du/books/images/9780399590504.jpg',

      })
      .returning('author_id')
    }).then(function (response) {
        return knex('books').insert({
          title: 'The Last Odyssey',
          author_id: response[0],
          book_description: 'The 15th book in the Sigma Force series. Catastrophic dangers might be set in motion when a medieval ship is discovered in Greenland.',
          popularity: 54,
          img: 'https://s1.nyt.com/du/books/images/9780399590504.jpg',
        })
        .returning('author_id')
    });
}
