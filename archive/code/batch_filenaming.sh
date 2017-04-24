# code used to batch process thumbnail image filenames.
# I ended up only using the first line for prefixing, but am keeping the suffixing code for provenance
# reference: http://stackoverflow.com/a/7451880/2145103

# prefix thumbnail filenames
for f in * ; do mv "$f" "thumb-med-$f" ; done

# suffix thumbnail filenames
for file in *.jpg; do mv "$file" "${file/.jpg/-thumb-med.jpg}"; done
