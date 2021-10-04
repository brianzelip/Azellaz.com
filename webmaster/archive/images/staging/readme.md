# About this directory

This `/images/staging/` directory is for adding new photos of products, before the photos reach `/images/products/` (which is the directory where photos are served in production).

The intended workflow for adding new photos is for Abbie to add new photos to this directory, then for Brian to process them (optimize using ImageOptim, then create two smaller thumbnail versions), and finally move them to `/images/products`.

---

## Photo optimization workflow

**_Run the following commands from `/images/staging/`_**

1.  Import the new raw photos AND the initial edited version of the new photos, where "edited" means:

* crop all photos to something like 2600x2000 px
* adjust the brightness of photos as needed

2.  Make a new directory called `PHOTOS`, then copy all of the edited photos into `PHOTOS`

```
#2
mkdir PHOTOS && cp <editedPhotosDir>/* PHOTOS/
```

3.  Run ImageOptim on all of the photos in `PHOTOS/` (see the screenshots in `./imageOptim_config/` for the ImageOptim config settings)

4.  Rename raw file extensions from `.JPG` to `.jpg`

```
#4
cd PHOTOS/ && for f in *.JPG; do mv "$f" "${f/.JPG/.jpg}"; done && cd ../
```

5.  Create two new directories titled `thumbs-med` and `thumbs-sm`

```
#5
mkdir thumbs-med && mkdir thumbs-sm
```

6.  Copy all photos in `PHOTOS` to each of the `thumbs` directories

```
#6
cp -R PHOTOS/* thumbs-med && cp -R PHOTOS/* thumbs-sm
```

7.  Add the appropriate prefix to each of the `thumbs` directories

```
#7
cd thumbs-med/ && for f in * ; do mv "$f" "thumb-med-$f" ; done && cd ../

cd thumbs-sm/ && for f in * ; do mv "$f" "thumb-sm-$f" ; done && cd ../
```

8.  Resize the photos in each of the thumbnail directories as appropriate

```
#8
mogrify -resize 25% thumbs-med/*.jpg && mogrify -resize 100x100 thumbs-sm/*.jpg
```

9.  Move all of the photos inside `PHOTOS/` to `../products/` as the largest set of photos, then move (or add to) `thumbs-med/` and `thumbs-sm/` to `../products/`

---

## Hero image

See the screenshots prefixed with 'Hero-' in `./imageOptim_config/` for the ImageOptim config settings.
