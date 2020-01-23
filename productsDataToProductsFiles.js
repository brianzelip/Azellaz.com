const fs = require('fs');
const data = require('./_data/products.json');

data.forEach((obj, i) => {
  const content = {
    layout: 'product',
    name: obj.name,
    displayName: obj.displayName,
    id: obj.id,
    currentListing: obj.currentListing,
    inStock: obj.inStock,
    stockOnHand: obj.stockOnHand,
    type: obj.type,
    descriptionShort: obj.descriptionShort,
    descriptionLong: obj.descriptionLong,
    materials: obj.materials,
    price: obj.price,
    weight: obj.weight,
    height: obj.height,
    width: obj.width,
    length: obj.length,
    imgPrimary: obj.imgPrimary,
    imgSecondarySet: obj.imgSecondarySet
  };

  fs.writeFileSync(
    `./_data/allproducts/${obj.slug}.json`,
    JSON.stringify(content, null, 2)
  );
  console.log(`FILE #${i} WRITTEN: ${obj.slug}.json 🎉`);
  console.log(content);
});
