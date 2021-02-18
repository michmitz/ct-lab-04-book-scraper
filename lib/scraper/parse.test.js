const request = require('./request');
const parse = require('./parse');

describe('parse function', () => {
  it('returns an array of all book titles, cover images, ratings, prices, and a boolean indicating if it is in stock', async() => {
    const document = await request(1);

    const bookArray = parse(document);

    expect(bookArray).toEqual(expect.arrayContaining([
      { title: 'A Light in the Attic', image: '../media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', starRating: 'Three', price: '£51.77', inStock: true },
      { title: 'Tipping the Velvet', image: '../media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg', starRating: 'One', price: '£53.74', inStock: true }
    ]));
  }); 
});
