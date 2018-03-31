const fs = require('fs');
const products = require('./_data/products.json');

const productFilesDir = './test/';

removeOldProductFiles(productFilesDir);
createNewProductFiles(productFilesDir);

function removeOldProductFiles(dir) {
  const oldFiles = fs.readdirSync(dir);

  console.log(`Deleting ${oldFiles.length} old product files...`);

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
  console.log(`Generating ${products.length} new Azellaz product pages...`);

  let count = 0;

  for (const product of products) {
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
  return;
}
