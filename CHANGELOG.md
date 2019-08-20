# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## README

This document started at v1.6.10 and only documents work after v1.6.10.

## [Unreleased]

## [1.8.0] - 2019-08-

### Meta

- branch: seo
- description: Started out by wanting to add metadata for the portfolio page. Then scope changed to refactor the approach to generating page metadata.

### Added

- _includes/meta-about.html
- _includes/meta-contact.html
- _includes/meta-home.html
- _includes/meta-portfolio.html
- _includes/meta-product.html

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
