TODO:
- IMAGE OPTIMIZATION
  - Need to create a set of images per image:
    - extra large - high quality for close ups
    - extra large - high quality for close ups @2x for retina
    - thumbnail
    - thumbnail @2x for retina
    - large - large enough for full screen cover, not as heavy as extra large
    - large - large enough for full screen cover, not as heavy as extra large @2x for retina
    - medium - for main page browsing view
    - medium - for main page browsing view @2x for retina
  - Best practices:
    - informative filenames; azellaz_duffle_bag_cobalt_leather-thumb.jpg
    - great alt text:
      - alt=""/>
      - alt="puppy"/>
      - alt="Dalmatian puppy playing fetch"/>
    - Anchor text:  "Photos of our June 2008 trip to Ireland."
    - robots.txt file - allow whatever you want to be crawled/show up in search
    - LAZY LOADING
  - Standards:
    - Picture-taking orientation and distance (of camera relation to product being photographed) standards or sets of preferences
    - Image crop size standards or sets of preferences
    - List of the range of explicit image sizes present in our design system
    -
  - optimize images - use that recent online image optimizer app
    - https://www.jpeg.io/
    - http://getoptimage.com/
    - https://chrome.google.com/webstore/detail/tinybeest-image-optimizat/iddlfhoicnaonfnepnjogldeaifkocae
    - http://cloudinary.com/blog/the_holy_grail_of_image_optimization_or_balancing_visual_quality_and_file_size
    - http://optimizilla.com/
    - http://www.imageoptimizer.net/Pages/Home.aspx
- mobile friendly
- componentize (in html/css/js) the product view to then be applied to all products
-
- BrowserSync cli:
  `browser-sync start --server --serveStatic "_site/" --files "*.html, css/*.css"`
- Netlify info
  - custom domain on godaddy (more depth), https://www.netlify.com/blog/2016/03/14/setting-up-your-custom-domain/
  - using godaddy (less depth), https://www.netlify.com/blog/2016/03/14/setting-up-your-custom-domain/#godaddy
  - quick start and cli config, https://www.netlify.com/docs/
  -
- Performance checks:
  - https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool
- Data schema for bread crumbs and faceted product way finding
  - small pouch
  - cross body
  - tote
  - duffle


Update Jekyll gems:
```bash
bundle install #updates both Gemfile and Gemfile.lock
```
