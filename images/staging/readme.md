This `/images/staging/` directory is for adding new photos of products, before the photos reach `/images/products/` (which is directory where photos are served in production).

The intended workflow for adding new photos is for Abbie to put photos in this directory, then for Brian to process them (optimize using ImageOptim, then create two smaller thumbnail versions), and finally move them to `/images/products`.
