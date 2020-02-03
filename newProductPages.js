const fs = require('fs');
const yaml = require('yaml-front-matter');

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

  dataFiles.forEach((path, i) => {
    const file = fs.readFileSync(path);
    console.log('yaml.loadFront(file):::::', yaml.loadFront(file));
    //     const data = JSON.parse(fs.readFileSync(`${productDataDir}${path}`));
    //     if (data.currentListing) {
    //       count++;
    //       const pageContent = `---
    // layout: product
    // name: "${data.name}"
    // displayName: "${data.displayName}"
    // slug: "${data.slug}"
    // permalink: "/${data.slug}/"
    // id: "${data.id}"
    // currentListing: ${data.currentListing}
    // inStock: ${data.inStock}
    // stockOnHand: ${data.stockOnHand}
    // type: "${data.type}"
    // descriptionShort: "${data.descriptionShort}"
    // descriptionLong: ${jsArray2Yaml(data.descriptionLong)}
    // materials: ${data.materials}
    // price: ${data.price}
    // weight: ${data.weight}
    // height: ${data.height}
    // width: ${data.width}
    // length: ${data.length}
    // imgPrimary: "${data.imgPrimary.split('.')[0]}"
    // imgSecondarySet: ${jsArray2Yaml(
    //         data.imgSecondarySet.map(item => item.split('.')[0])
    //       )}
    // ---
    // `;
    //       fs.writeFileSync(`${productPagesDir}${data.slug}.md`, pageContent);
    //       console.log(`${count}. ${data.slug}.md`);
    //     }
  });
}
