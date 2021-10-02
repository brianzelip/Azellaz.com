const fs = require('fs');
const data = require('./_data/products.json');

function img(str) {
  return `https://res.cloudinary.com/azellaz/image/upload/${str}`;
}

data.forEach((obj, i) => {
  const content = {
    name: obj.name,
    displayName: obj.displayName,
    id: obj.id,
    slug: obj.slug,
    currentListing: obj.currentListing,
    inStock: obj.inStock,
    stockOnHand: obj.stockOnHand,
    type: obj.type,
    descriptionShort: obj.descriptionShort,
    body: obj.descriptionLong.join('\n\n'),
    materials: obj.materials,
    price: obj.price,
    weight: obj.weight,
    height: obj.height,
    width: obj.width,
    length: obj.length,
    imgPrimary: img(obj.imgPrimary),
    imgSecondarySet: obj.imgSecondarySet.map(image => img(image))
  };

  fs.writeFileSync(
    `./_data/products/${obj.slug}.json`,
    JSON.stringify(content, null, 2)
  );
  console.log(`FILE #${i} WRITTEN: ${obj.slug}.json 🎉`);
  console.log(content);
});
