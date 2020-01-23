const fs = require('fs');

const productDataDir = './_data/allproducts';
const productPagesDir = './_products/';

removeOldProductPages();
createNewProductPages();

function removeOldProductPages() {
  const oldFiles = fs.readdirSync(productPagesDir);

  console.log(
    `Deleting ${oldFiles.length} old Azellaz product files in ${productPagesDir} ...`
  );

  oldFiles.forEach((file, i) => {
    console.log(`${i}. ${file}`);
    fs.unlinkSync(`${productPagesDir}${file}`);
  });

  console.log('\n');
  return;
}

function createNewProductPages() {
  console.log(`Generating new Azellaz product pages in ${productPagesDir} ...`);

  const dataFiles = fs.readdirSync(productDataDir);

  dataFiles.forEach((path, i) => {
    const data = JSON.parse(fs.readFileSync(`${productDataDir}${path}`));

    if (data.currentListing) {
      const pageContent = `---
layout: product
name: "${data.name}"
displayName: "${data.displayName}"
id: "${data.id}"
currentListing: ${data.currentListing}
inStock: ${data.inStock}
stockOnHand: ${data.stockOnHand}
type: "${data.type}"
descriptionShort: "${data.descriptionShort}"
descriptionLong: ${data.descriptionLong}
materials: ${data.materials}
price: ${data.price}
weight: ${data.weight}
height: ${data.height}
width: ${data.width}
length: ${data.length}
imgPrimary: "${data.imgPrimary}"
imgSecondarySet: ${data.imgSecondarySet}
---
`;

      fs.writeFileSync(`${dir}${product.slug}.html`, fileContent);
      console.log(`${count}. ${product.slug}.html`);
    }
  });

  let count = 0;

  for (const product of products) {
    if (product.currentListing) {
      count++;

      const fileContent = `---
layout: product
permalink: /${product.slug}/
productID: ${product.id}
---
`;

      fs.writeFileSync(`${dir}${product.slug}.html`, fileContent);
      console.log(`${count}. ${product.slug}.html`);
    }
  }
  return;
}
