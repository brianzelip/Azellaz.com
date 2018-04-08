const fs = require('fs');
const products = require('./_data/products.json');

const productFilesDir = './products/';

removeOldProductFiles(productFilesDir);
createNewProductFiles(productFilesDir);

function removeOldProductFiles(dir) {
  const oldFiles = fs.readdirSync(dir);

  console.log(
    `Deleting ${oldFiles.length} old product files in ${productFilesDir} ...`
  );

  let count = 0;
  for (const file of oldFiles) {
    count++;
    console.log(`${count}. ${file}`);
    fs.unlinkSync(`${dir}${file}`);
  }

  console.log('\n');

  return;
}

function createNewProductFiles(dir) {
  console.log(`Generating new Azellaz product pages in ${productFilesDir} ...`);

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
