changes to make given AA-metadata.csv

  - products.json `id` values change to the AA-metadata.csv `code` values
  - products.json `slug` becomes AA-metadata.csv `name`.toLowerCase().trim()
  - products.json `name` becomes AA-metadata.csv `display name`
  - products.json should only be made up of those rows where the value of `Include on website?` is `y`


log
- Optimized the photos from `./new - needs to be optimized/*`, put them into `../PHOTOS/`.
- copied the already-optimized photos from `./old - already optimized/*` into `../PHOTOS/`.
- for the 23 products ready to be go live on the website (as found in `./AA-metadata.csv`), created `./products.csv` and `./products.json`, which contain the same content in different formats.

NEXT STEPS:
- Abbie needs to rename the photos in `../PHOTOS/` according to the photo filenames in both `./products.csv` & `./products.json`. Since both files contain the same data, choose to copy/paste from whichever data file you feel more comfortable with. 
    DONE EXCEPT I didn't remove "no-leather" from any of the names. -AZ20170705
- Once `../PHOTOS/*` are all appropriately renamed, Brian will run the image resizing scripts to create the two sets of smaller images, then move all production-ready content from `../../staging/` to `../../products/`, and clean up the staging directory, including archiving the appropriate files, and removing the unnecessary files.
- then submit PR from `develop` branch to `master` branch to deploy.
