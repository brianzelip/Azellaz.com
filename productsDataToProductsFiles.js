const fs = require('fs');
const data = require('./_data/products.json');

function jsArray2Yaml(arr) {
  return arr.length > 0
    ? arr
        .map(
          item => `
  - "${item}"`
        )
        .join('')
    : ``;
}

const output = data.forEach((product, i) => {
  const content = `---
layout: product
name: "${product.name}"
displayName: "${product.displayName}"
id: "${product.id}"
currentListing: ${product.currentListing}
inStock: ${product.inStock}
stockOnHand: ${product.stockOnHand}
type: "${product.type}"
descriptionShort: "${product.descriptionShort}"
descriptionLong: ${jsArray2Yaml(product.descriptionLong)}
materials: ${jsArray2Yaml(product.materials)}
price: ${product.price}
weight: ${product.weight}
height: ${product.height}
width: ${product.width}
length: ${product.length}
imgPrimary: "${product.imgPrimary}"
imgSecondarySet: ${jsArray2Yaml(product.imgSecondarySet)}
---
`;

  fs.writeFileSync(`./products/cms/${product.slug}.md`, content);
  console.log(`FILE #${i} WRITTEN: ${product.slug}.md 🎉`);
  console.log(content);
});
