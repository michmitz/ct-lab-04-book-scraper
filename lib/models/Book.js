const pool = require('../utils/pool');

class Book {
  id;
  title;
  image;
  starRating;
  price;
  inStock;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.image = row.image;
    this.starRating = row.star_rating;
    this.price = row.price;
    this.inStock = row.in_stock;
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, image, star_rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [book.title, book.image, book.starRating, book.price, book.inStock]
    );

    return new Book(rows[0]);
  }
}

module.exports = Book;
