# About this directory

This `/images/staging/` directory is for adding new photos of products, before the photos reach `/images/products/` (which is the directory where photos are served in production).

The intended workflow for adding new photos is for Abbie to add new photos to this directory, then for Brian to process them (optimize using ImageOptim, then create two smaller thumbnail versions), and finally move them to `/images/products`.

---
# Photo optimization workflow

> run the following commands from `/images/staging`

1. Import the new raw photos AND the initial edited version of the new photos, where "edited" means:
  - crop all photos to something like 2600x2000 px
  - adjust the brightness of photos as needed
  - run ImageOptim according to the screenshots in `./imageOptim_config`

2. Make a new directory called `PHOTOS`, then copy all of the edited photos (in a directory as `<editedPhotosDir>`) into `PHOTOS`

```
#2
mkdir PHOTOS && cp <editedPhotosDir>/* PHOTOS/
```

3. Run ImageOptim on `PHOTOS` (see the screen shots in this directory for the ImageOptim config settings)

4. Create two new directories titled `thumbs-med` and `thumbs-sm`

```
#4
mkdir thumbs-med && mkdir thumbs-sm
```

5. Copy all photos in `PHOTOS` to each of the `thumbs` directories

```
#5
cp -R <editedPhotosDir>/* thumbs-med/ && cp -R <editedPhotosDir>/* thumb-sm
```

6. Add the appropriate prefix to each of the `thumbs` directories

```
#6
cd thumbs-med/ && for f in * ; do mv "$f" "thumb-med-$f" ; done && cd ../

cd thumbs-sm/ && for f in * ; do mv "$f" "thumb-sm-$f" ; done && cd ../
```

7. Rename raw file extensions from `.JPG` to `.jpg`

```
#7
cd thumbs-med/ for file in thumbs-med/*.JPG; do mv "$file" "${file/.JPG/.jpg}"; done && cd ../

cd thumbs-sm/ for file in thumbs-sm/*.JPG; do mv "$file" "${file/.JPG/.jpg}"; done && cd ../
```

8. Resize the photos in each of the thumbnail directories as appropriate

```
#8
mogrify -resize 25% thumbs-med/*.jpg && mogrify -resize 50x50 thumbs-sm/*.jpg
```
