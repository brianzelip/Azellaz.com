# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## README

This document started at v1.6.10 and only documents work after v1.6.10.

## [Unreleased]

## [1.7.0] - 2019-08-

### Meta

- branch: gallery
- description:
  - add a gallery of older products
  - clean up other odds and ends (like adding this changelog)

### Added

- CHANGELOG.md
- gallery.json
- gallery.html
- gallery-grid.html
- gallery-grid-item.html

### Updated

- package\*: Responded to a npm audit by upgrading braces to 2.3.1, still got the warning; upgraded to 2.3.2, still got the warning. So even though package.json is now polluted with this sub sub sub dependency, I'm keeping it as is and will deal with audits down the line.
- Gemfile.lock: I ran into build problems when working on this feature branch on a different computer with a newer ruby set up. I banged my head against the wall for a good amount of time, then figured it out. The 3 files associated with the ruby nature of the project are:
  1. .ruby-version: this is useful for netlify, as well as local development, but not necessary
  2. Gemfile: this is the main file, basically the dependencies and devDependencies in node - it just lists the main libraries to bring into the project (of course, they bring in other depdencies too).
  3. Gemfile.lock: this is auto generated, doesn't seem to care about the ruby -v, but does record bundle -v

**Don't forget about RVM!**

In the future, when wanting to upgrade or downgrade ruby -v and bundle -v, use RVM to install ruby -v, then use gem to install bundle -v. Then run `bundle install` to output the Gemfile.lock.

- see this [!so answer](https://stackoverflow.com/a/54876869/2145103)
- and [this informative !so post](https://stackoverflow.com/a/44980854/2145103)
- az.css: Add some color styles for design debugging
