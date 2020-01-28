# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## README

This document started at v1.6.10 and only documents work after v1.6.10.

## [Unreleased]

- Added `images/uploads/thumbs` and `images/uploads/thumbs2` to see if netlify cms allows nested media folders
  - IT DID NOT WORK - Netlify CMS does not support nested media folders

### TODO

- cms admin
  - ~~each product has its own .md page, and this is what is edited in the cms~~
  - ability to create create a page with certain UI and design
    - like a grid of items, regardless of if for shop or portfolio
    - this means having a talk with Abbie about what kinds of different views she wants
- carousel landing page
- validate that for each product that is to be included in the shop, each product has a unique ID; currently, `AZ00` is the default `id` for new products. This is helpful for data input, but hairy for making snipcart work via unique ids for each product. (The thin-ness isn't only due to not-validating here, it's the fact that the snipcart database is distinct from this front end pipeline. ie: It's a much bigger issue!)
- Update `_includes/shop-grid-item.html` to render "OUT OF STOCK" when `product.inStock === 0`

### Talk w/ Abbie

- do you like call out sections with bigger text, a la https://crosby-demo.squarespace.com/our-story?
- have a stories/articles/info-sharing section - something that doesn't have to be updated, a la https://hester-demo.squarespace.com/blog
- have a stockists page, a la https://ventura-demo.squarespace.com/stockists

## [2.0.0] - 2020-01-25

- branch: dev
- description: Merge latest dev work on implementing Netlify CMS into master branch. The major change comes in because there is a new product data model and product page creation/editing/publication workflow via Netlify CMS.

## [1.12.3] - 2020-01-25

- branch: dev
- description: Fix version number DOH!

### Updated

- package\*.json

## [1.12.2] - 2020-01-25

- branch: dev
- description: Keep `products/` via .gitkeep for the Netlify build to succeed!

### Added

- products/.gitkeep

### Updated

- newProductPages.js: delete files in products/ only if not .gitkeep

## [1.12.1] - 2020-01-25

- branch: dev
- description: update products data dir now that the product page creation flow is ready

### Updated

- \_data/allproducts/: rename \_data/products/
- admin/config.yml: update products collection folder path
- newProductPages.js: update productDataDir
- productsDataToProductsFiles.js: Move to `archive/code/`

## [1.12.0] - 2020-01-25

- branch: dev
- description: Update front end to implement new back end

### Updated

- admin/config.yml: fix `imgSecondarySet` value for yaml array in front matter
- \_config.yml: Add `defaults` property for product json files for rendering the shop based on the new product data model (individual json files per product, vs one json file for all products)
- newProductPages.js: add `jsArray2Yaml()` and update yaml front matter
- .gitignore: ignore `products/*.md` dir since they are now auto-generated
- package.json: Add `refreshProductPages` step to start script
- \_includes/shop-grid.html: refactor around new product data model
- \_includes/shop-grid-item.html: refactor around new product data model
- \_includes/product-page.html: refactor around new product data model
- \_includes/product-thumbnails.html: refactor around new product data model
- \_includes/meta-product.html: refactor around new product data model

## [1.11.0] - 2020-01-24

- branch: dev
- description: Get netlify cms back end working (ie: publishing new pages and editing old pages). The principle dynamic is between `admin/config.yml` and `_data/allproducts/*.json`, and then the yaml front matter in the auto-generated pages (via `newProductPages.js`) in `products/*.md`.

This really represents v2, since the way for the staff user to update the site has now changed. Although it's still possible to edit json files in the repo; though doing so will always be possible.

### Documentation with this bump:

1. Make new cms users

BZ Netlify > azellaz > Identity > Invite Users > input user email

2. Login

url: https://www.azellaz.com/admin

3. Un/Publish a page

a. Login
b. Choose the collection of information to edit on the left (currently only "Products")
c. Choose file to edit, or click the "New Products" button
d. Toggle the "Include item in shop?" on to publish page, toggle it off to not publish or unpublish page

1. `products/` is now auto-refreshed via

`newProductPages.js` is called before `jekyll build` via `npm build`

5. `_data/products.json` has been destructured into `_data/allproducts/*.json`

6. Made data parity between each product json file and the Netlify CMS config

### Added

- productsDataToProductsFiles.js - single-purpose tool to use the work already put into defining the data in `_data/products.json` by creating new data files for each object
- \_data/allproducts/: A json file for each product contained in \_data/products.json. This is the folder that Netlify CMS looks at for editing products collection data.

### Updated

- admin/config.yml:
  - add the appropriate fields to match product data model
  - change the branch and site_url fields for dev work
- \_includes/meta-product.html: refactor use of slug
- \_includes/product-page.html: refactor use of slug
- \_includes/product-thumbnails.html: refactor use of slug
- \_layouts/product.html: remove for loop and if statement at root of html

## [1.10.0] - 2020-01-20

- branch: init-netlifycms
- description: Wire up Netlify CMS

### Added

- /admin
  - index.html
  - config.yml

### Updated

- index.html: Added netlify identity widget to bottom of page

## [1.9.5] - 2019-08-26

### Meta

- branch: corner-borders-patch-2
- description: Previous patch missed unrounding the hero page bg-darken wrappers

### Updated

- hero.html: Unround the `<p>` corners
- header.html: Unround the `<nav>` corners

## [1.9.4] - 2019-08-23

### Meta

- branch: corner-borders-patch
- description: Previous patch missed unrounding the flash borders

## [1.9.3] - 2019-08-21

### Meta

- branch: corner-borders
- description: Refactor all rounded corners to not rounded
  - Also thinking of design possibilities while looking at https://www.pawenastudio.com/ and https://shopdanabechert.com/; see these notes in design.md

### Added

- design.md: Notes on future design changes

### Updated

- \_includes/hero.html
- \_includes/header.html
- \_includes/shop-filter-btns.html

## [1.9.2] - 2019-08-21

### Meta

- branch: master
- description: Old products were still getting generated because of a folder that was still around from the debugging phase before I implemented the newProductPages.js workflow.

### Deleted

- new-products/

## [1.9.1] - 2019-08-20

### Meta

- branch: update-product-pages
- description: I noticed the products/ dir has more pages than are currently listed in the shop. This means that the last time we updated products.json and the shop, we didn't run newProductPages.js.

This needs to be added to some docs!

### Updated

- products/
- maintenance.md

## [1.9.0] - 2019-08-20

### Meta

- branch: metadata-images
- description: I need to get a grasp on the seo metadata images. Hithertofore, the "featured image" base file name was added to \_config.yml, but the file name was an older convention that Abbie changed soon after, but the metadata featured image did not get updated, so the image has been broke in the twitter card for some time now. Instead of hardcoding in the name of the preferred image at any given time, there should be some directory in images/ that is named something like images/meta/. There should be some docs that mention the meta images as a task that needs to be maintained over time. (there should be other maintenance things listed in the docs too, like deleting/generating new product pages when products.json is updated, meta images, twitter card validator for new pages, etc.)

**TODO** Also, the metadata includes are filled with repetition. While the last release abstracted out the metadata page modules from one long include, they can still be boiled down more.

Also, \_config.yml needs to be organized into sections, like "social links", "images", "meta images", "prose content", etc.

### Added

- images/meta/: create dir with duplicated images to be used strictly for metadata

### Updated

- \_config.yml: refactored meta image property names
- \_includes/meta-\*.html: Updated image content, removed meta tags with empty keyword content

## [1.8.0] - 2019-08-20

### Meta

- branch: seo
- description: Started out by wanting to add metadata for the portfolio page. Then scope changed to refactor the approach to generating page metadata.

### Added

- \_includes/meta-about.html
- \_includes/meta-contact.html
- \_includes/meta-home.html
- \_includes/meta-portfolio.html
- \_includes/meta-product.html

### Updated

- head.html: replaced hardcoded logic with includes

## [1.7.1] - 2019-08-20

### Meta

- branch: master
- description: quick patch home page buttons

### Updated

- \_includes/hero.html: Add portfolio button
- \_includes/shop-filter-buttons.html: Change font weights to normal

## [1.7.0] - 2019-08-19

### Meta

- branch: gallery
- description:
  - add a gallery of older products
  - clean up other odds and ends (like adding this changelog)

The project started out named 'Gallery', but ended up with 'Portfolio'.

### Added

- CHANGELOG.md
- ~~gallery.json~~: I started by creating a json file with an array of all the image gallery file names, but this introduced another layer of abstraction that would need maintenance every time Abbie wants to change the order of the gallery display. Instead of maintaining this data file, I utilized Jekyll's [static_files](https://jekyllrb.com/docs/static-files/) api, which allows me to loop over an arbitrary collection of static files, like those in images/Gallery!
- portfolio.html
- portfolio-grid.html
- portfolio-grid-item.html

### Updated

- package\*: Responded to a npm audit by upgrading braces to 2.3.1, still got the warning; upgraded to 2.3.2, still got the warning. So even though package.json is now polluted with this sub sub sub dependency, I'm keeping it as is and will deal with audits down the line.
- Gemfile.lock: I ran into build problems when working on this feature branch on a different computer with a newer ruby set up. I banged my head against the wall for a good amount of time, then figured it out. The 3 files associated with the ruby nature of the project are:

  1. .ruby-version: this is useful for netlify, as well as local development, but not necessary
  2. Gemfile: this is the main file, basically the dependencies and devDependencies in node - it just lists the main libraries to bring into the project (of course, they bring in other depdencies too).
  3. Gemfile.lock: this is auto generated, doesn't seem to care about the ruby -v, but does record bundle -v

  _Note_: the bundle -v is impacted by the presence of "BUNDLED WITH" in a Gemfile.lock if it exists. So if you want to see a specific bundle -v, you may have to delete the lock file, then run bundle -v to see the desired -v, then run bundle install to re-create the lock file.

**Don't forget about RVM!**

In the future, when wanting to upgrade or downgrade ruby -v and bundle -v, use RVM to install ruby -v, then use gem to install bundle -v. Then run `bundle install` to output the Gemfile.lock.

- see this [!so answer](https://stackoverflow.com/a/54876869/2145103)
- and [this informative !so post](https://stackoverflow.com/a/44980854/2145103)
- az.css: Add some color styles for design debugging
- shop-fixed-logo.html: Renamed fixed-logo.html for greater scope
- \_config.yml: Added a `defaults` property to remove a layer of abstraction in maintaining the gallery photos by "adding front matter" to the gallery images. This pseudo front matter makes it easy to query for a set of static files and do something with them, via the Jekyll [static_files api](https://jekyllrb.com/docs/static-files/). Via Jekyll docs:
  > The `defaults` key holds an array of scope/values pairs that define what defaults should be set for a particular file path
