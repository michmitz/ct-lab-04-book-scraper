const request = require('./request');

describe('request function', () => {
  it('makes a request to book scraper site and returns html', async() => {
    const document = await request(1);

    expect(document.querySelector('.col-sm-8').textContent).toEqual(expect.stringContaining('Books to Scrape'));
  });
});


