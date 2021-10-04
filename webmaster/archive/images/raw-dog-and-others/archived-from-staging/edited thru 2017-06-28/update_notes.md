changes to make given AA-metadata.csv

  - products.json `id` values change to the AA-metadata.csv `code` values
  - products.json `slug` becomes AA-metadata.csv `name`.toLowerCase().trim()
  - products.json `name` becomes AA-metadata.csv `display name`
  - products.json should only be made up of those rows where the value of `Include on website?` is `y`


log
- Optimized the photos from `./new - needs to be optimized/*`, put them into `../PHOTOS/`.
- copied the already-optimized photos from `./old - already optimized/*` into `../PHOTOS/`.
- for the 23 products ready to be go live on the website (as found in `./AA-metadata.csv`), created `./products.csv` and `./products.json`, which contain the same content in different formats.
- all photos in `../PHOTOS/` have been appropriately renamed, and the two sets of smaller thumbnails have been created. All photos are now production ready, and have been moved from from `../../staging/` to `../../products/`.

NEXT STEPS:
-  clean up the staging directory, including archiving the appropriate files, and removing the unnecessary files.
- then Abbie will add the appropriate product data to either `./products.csv` or `./products.json` (ie, shortDescription, longDescription, measurements, etc)
- then submit PR from `develop` branch to `master` branch to deploy.
