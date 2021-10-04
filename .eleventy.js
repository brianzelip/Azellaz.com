module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('fonts');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('humans.txt');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false
  });

  return {
    dir: {
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
