const parse = document => {
  const bookDiv = [...document.querySelectorAll('article')];

  return bookDiv.map(book => ({
    title: 
      book.querySelector('h3 > a').getAttribute('title'),
    image: 
      book.querySelector('.image_container > a > img').getAttribute('src'),
    starRating: 
      book.querySelector('.star-rating').getAttribute('class').split(' ')[1],
    price: 
      book.querySelector('.price_color').textContent,
    // eslint-disable-next-line no-constant-condition
    inStock: 'In Stock' ? true : false 
  }));
};

module.exports = parse;
