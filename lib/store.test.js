const fs = require('fs');
const pool = require('./utils/pool');
const store = require('./store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of books and stores them in the db', async() => {
    const testBooks = [
      { title: 'faketitle1', image: 'hereisastring', starRating: 'Four', price: '123', inStock: true },
      { title: 'faketitle2', image: 'hereisastring', starRating: 'Three', price: '123', inStock: false },
      { title: 'faketitle3', image: 'hereisastring', starRating: 'Two', price: '321', inStock: false },
      { title: 'faketitle4', image: 'hereisastring', starRating: 'One', price: '545', inStock: true }
    ];

    await store(testBooks);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(4);

  });
});
