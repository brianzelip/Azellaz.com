const fs = require('fs');
const data = require('./_data/products.json');

function arrJS2Yaml(arr) {
  return arr.length > 0
    ? arr
        .map(
          item => `
  - "${item}"`
        )
        .join('')
    : ``;
}

data.forEach((obj, i) => {
  const content = `---
layout: product
name: ${obj.name}
displayName: ${obj.displayName}
id: ${obj.id}
slug: ${obj.slug}
currentListing: ${obj.currentListing}
inStock: ${obj.inStock}
stockOnHand: ${obj.stockOnHand}
type: ${obj.type}
descriptionShort: ${obj.descriptionShort}
materials: ${arrJS2Yaml(obj.materials)}
price: ${obj.price}
weight: ${obj.weight}
height: ${obj.height}
width: ${obj.width}
length: ${obj.length}
imgPrimary: ${obj.imgPrimary.split('.')[0]}
imgSecondarySet: ${arrJS2Yaml(
    obj.imgSecondarySet.map(img => img.split('.')[0])
  )}
---

${obj.descriptionLong.join('\n\n')}
`;

  fs.writeFileSync(`./_data/products/${obj.slug}.md`, content);
  console.log(`FILE #${i} WRITTEN: ${obj.slug}.md 🎉`);
  console.log(content);
});
