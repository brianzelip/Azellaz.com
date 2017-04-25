# code used to batch process thumbnail image filenames.
# I ended up only using the first line for prefixing, but am keeping the suffixing code for provenance
# reference: http://stackoverflow.com/a/7451880/2145103

# prefix thumbnail filenames
for f in * ; do mv "$f" "thumb-med-$f" ; done
for f in * ; do mv "$f" "thumb-sm-$f" ; done

# suffix thumbnail filenames
for file in *.jpg; do mv "$file" "${file/.jpg/-thumb-med.jpg}"; done

#
# ImageMagick
#

# Medium thumbnails, 25% of OG pic (og pics come from one directory up)
mogrify -resize 25% *.jpg

# Smallest thumbnails, 50px by 50px, no matter the dimensions of the OG pic (og pics come from one directory up)
mogrify -resize 50x50 *.jpg
