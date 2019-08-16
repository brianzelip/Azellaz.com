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
- shop-grid.html
- shop-grid-item.html

### Updated

- package\*: Responded to a npm audit by upgrading braces to 2.3.1, still got the warning; upgraded to 2.3.2, still got the warning. So even though package.json is now polluted with this sub sub sub dependency, I'm keeping it as is and will deal with audits down the line.
- Gemfile.lock: Couldn't get jekyll serving on a laptop with a newer ruby stack given the old lock file from my main dev machine. I kept the old lock file (renamed to Gemfile.old.lock) in case the main dev machine needs it - don't really want to wade into the weeds of updating ruby stuff on main dev machine!
