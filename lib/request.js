const fetch = require('node-fetch');

const request = async() => {
  const response = await fetch('http://books.toscrape.com/index.html');

  const html = await response.text();
  return html;
};

module.exports = request;
