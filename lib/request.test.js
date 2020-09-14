const request = require('./request');

describe('request function', () => {
  it('makes a request to book scraper site and returns html', async() => {
    const html = await request();

    expect(html).toEqual(expect.stringContaining('Books to Scrape'));

  });
});
