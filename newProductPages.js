const fs = require('fs');

const productDataDir = './_data/products/';
const productPagesDir = './products/';

removeOldProductPages();
createNewProductPages();

function removeOldProductPages() {
  const oldFiles = fs.readdirSync(productPagesDir);

  console.log(
    `Deleting ${oldFiles.length -
      1} old Azellaz product files in ${productPagesDir} ...`
  );

  oldFiles.forEach((file, i) => {
    if (file !== '.gitkeep') {
      console.log(`${i}. ${file}`);
      fs.unlinkSync(`${productPagesDir}${file}`);
    }
  });

  console.log('\n');
  return;
}

function createNewProductPages() {
  console.log(`Generating new Azellaz product pages in ${productPagesDir} ...`);

  function jsArray2Yaml(arr) {
    return arr
      ? arr.length > 0
        ? arr
            .map(
              item => `
  - "${item}"`
            )
            .join('')
        : ``
      : ``;
  }

  const dataFiles = fs.readdirSync(productDataDir);

  let count = 0;

  dataFiles.forEach(path => {
    const data = JSON.parse(fs.readFileSync(`${productDataDir}${path}`));
    if (data.currentListing) {
      count++;
      const pageContent = `---
layout: product
name: "${data.name}"
displayName: "${data.displayName}"
slug: "${data.slug}"
id: "${data.id}"
currentListing: ${data.currentListing}
inStock: ${data.inStock}
stockOnHand: ${data.stockOnHand}
type: "${data.type}"
descriptionShort: "${data.descriptionShort}"
materials: ${jsArray2Yaml(data.materials)}
price: ${data.price}
weight: ${data.weight}
height: ${data.height}
width: ${data.width}
length: ${data.length}
imgPrimary: "${data.imgPrimary}"
imgSecondarySet: ${jsArray2Yaml(data.imgSecondarySet)}
---

${data.body}
`;
      fs.writeFileSync(`${productPagesDir}${data.slug}.md`, pageContent);
      console.log(`${count}. ${data.slug}.md`);
    }
  });
}
