changes to make given AA-metadata.csv

  - products.json `id` values change to the AA-metadata.csv `code` values
  - products.json `slug` becomes AA-metadata.csv `name`.toLowerCase().trim()
  - products.json `name` becomes AA-metadata.csv `display name`
  - products.json should only be made up of those rows where the value of `Include on website?` is `y`


log
finished image optimization
