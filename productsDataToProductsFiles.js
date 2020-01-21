const fs = require('fs');
const products = require('./_data/products.json');

const productFilesDir = './products/';

products.forEach(product => {
  const fileContent = `---
layout: product
published: ${product.currentListing ? true : false}
permalink: /${product.slug}/
productID: ${product.id}
id: ${product.id}
name: ${product.name}
displayName: ${product.displayName}
slug: ${product.slug}
url: ${product.url}
inStock: ${product.inStock}
stockOnHand: ${product.stockOnHand}
price: ${product.price}
type: ${product.type}
materials: ${product.materials}
currentListing: ${product.currentListing}
descriptionShort: ${product.descriptionShort}
descriptionLong: ${product.descriptionLong}
weight: ${product.weight}
height: ${product.height}
width: ${product.width}
length: ${product.length}
imgPrimary: ${product.imgPrimary}
imgSecondarySet: ${product.imgSecondarySet}
---
`;
});
