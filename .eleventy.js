const util = require('util');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
  // eleventyConfig.addPassthroughCopy('./css');
  eleventyConfig.addWatchTarget('./css');

  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj);
  })
}