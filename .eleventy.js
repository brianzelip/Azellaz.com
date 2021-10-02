module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css/dist');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images/meta');
  eleventyConfig.addPassthroughCopy('images/products');
  eleventyConfig.addPassthroughCopy('images/portfolio');
  eleventyConfig.addPassthroughCopy('images/*.jpg');
  eleventyConfig.addPassthroughCopy('images/*.png');
  eleventyConfig.addPassthroughCopy('images/*.svg');
  eleventyConfig.addPassthroughCopy('humans.txt');
  eleventyConfig.addPassthroughCopy('robots.txt');

  eleventyConfig.addPassthroughCopy('fonts');
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
