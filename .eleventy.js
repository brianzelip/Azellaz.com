module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('fonts');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy({ 'crawlers/*.txt': '/' });

  eleventyConfig.addWatchTarget('./css/');

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false
  });

  return {
    templateFormats: ['md', 'html', '11ty.js', 'njk'],
    dir: {
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
