module.exports = job => {
  console.log(`About to scrape page ${job.data.page}`);
  return Promise.resolve('done with page');
};
