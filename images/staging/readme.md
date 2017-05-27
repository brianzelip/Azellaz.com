# About this directory

This `/images/staging/` directory is for adding new photos of products, before the photos reach `/images/products/` (which is the directory where photos are served in production).

The intended workflow for adding new photos is for Abbie to add new photos to this directory, then for Brian to process them (optimize using ImageOptim, then create two smaller thumbnail versions), and finally move them to `/images/products`.

---
# Photo optimization workflow

1. Import the new raw photos AND the initial edited version of the new photos, where "edited" means:
  - crop all photos to something like 2600x2000 px
  - adjust the brightness of photos as needed

2. Make a new directory called `PHOTOS`, then copy all of the edited photos (in a directory as `<editedPhotosDir>`) into `PHOTOS`

3. Run ImageOptim on `PHOTOS` (see the screen shots in this directory for the ImageOptim config settings)

4. Create two new directories titled `thumbs-med` and `thumbs-sm`

5. Copy all photos in `PHOTOS` to each of the new directories

6. Rename raw file extensions from `.JPG` to `.jpg`

7. Resize the photos in each of the thumbnail directories as appropriate

```
# run from `/images/staging`

# run ImageOptim before next step

mkdir PHOTOS && cp <editedPhotosDir>/* PHOTOS/ #2

mkdir thumbs-med && mkdir thumbs-sm #4

cp -R <editedPhotosDir>/* thumbs-med/ && cp -R <editedPhotosDir>/* thumb-sm #5

for file in thumbs-med/*.JPG; do mv "$file" "${file/.JPG/.jpg}"; done && for file in thumbs-sm/*.JPG; do mv "$file" "${file/.JPG/.jpg}"; done #6

mogrify -resize 25% thumbs-med/*.jpg && mogrify -resize 50x50 thumbs-sm/*.jpg #7
```
