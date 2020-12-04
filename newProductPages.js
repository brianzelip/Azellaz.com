const fs = require('fs');
const get = require('simple-get');

const productDataDir = './_data/products/';
const productPagesDir = './products/';

removeOldProductPages();
createNewProductPages();

function removeOldProductPages() {
  const oldFiles = fs.readdirSync(productPagesDir);

  console.log(
    `Deleting ${
      oldFiles.length - 1
    } old Azellaz product files in ${productPagesDir} ...`
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
  //TODO break this fn up into 2: abstract out the snipcart fetch,
  // then call it from here
  console.log(`Generating new Azellaz product pages in ${productPagesDir} ...`);

  const snipApi = 'https://app.snipcart.com/api/products?limit=100';
  const snipKey = process.env.SNIPCART;
  const snipSecret = Buffer.from(`${snipKey}:`).toString('base64');

  const opts = {
    url: snipApi,
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${snipSecret}`
    }
  };

  get.concat(opts, function (err, res, data) {
    // data is a Buffer
    if (err) throw err;

    const snipData = JSON.parse(data);

    const dataFiles = fs.readdirSync(productDataDir);

    let count = 0;

    dataFiles.forEach((path) => {
      const _data = JSON.parse(fs.readFileSync(`${productDataDir}${path}`));
      if (_data.currentListing === true) {
        count++;

        function cleanData(obj) {
          // since not all product fields are required in the cms,
          // some expected keys might not be present,
          // so we have to clean the product data by adding the
          // missing keys, each with an empty string value
          function c(key) {
            return obj.hasOwnProperty(key) ? obj[key] : '';
          }
          return {
            slug: c('slug'),
            name: c('name'),
            displayName: c('displayName'),
            slug: c('slug'),
            id: c('id'),
            currentListing: c('currentListing'),
            type: c('type'),
            descriptionShort: c('descriptionShort'),
            materials: c('materials'),
            price: c('price'),
            weight: c('weight'),
            height: c('height'),
            width: c('width'),
            length: c('length'),
            imgPrimary: c('imgPrimary'),
            imgSecondarySet: c('imgSecondarySet'),
            body: c('body')
          };
        }

        const d = cleanData(_data);

        const pageContent = `---
layout: product
permalink: "/${d.slug}/"
name: "${d.name}"
displayName: "${d.displayName}"
slug: "${d.slug}"
id: "${d.id}"
currentListing: ${d.currentListing}
stockOnHand: ${getStockFromSnipcart(d.id)}
type: ${jsArray2Yaml(d.type)}
descriptionShort: "${d.descriptionShort}"
materials: ${jsArray2Yaml(d.materials)}
price: ${d.price}
weight: ${d.weight}
height: ${d.height}
width: ${d.width}
length: ${d.length}
imgPrimary: "${imgFileName(d.imgPrimary)}"
imgSecondarySet: ${jsArray2Yaml(secondaryImgFileNames(d.imgSecondarySet))}
---

${d.body}
`;
        fs.writeFileSync(`${productPagesDir}${d.slug}.md`, pageContent);
        console.log(`${count}. ${d.slug}.md`);
      } else {
        return;
      }
    });

    function getStockFromSnipcart(id) {
      const item = snipData.items.filter((item) => item.userDefinedId === id);

      return item.length > 0 ? item[0].stock : 0;
    }
  });

  function jsArray2Yaml(arr) {
    return arr
      ? arr.length > 0
        ? arr
            .map(
              (item) => `
  - "${item}"`
            )
            .join('')
        : ``
      : ``;
  }

  function imgFileName(url) {
    const fileNameIndex = url.split('/').length - 1;
    return `/${url.split('/')[fileNameIndex]}`;
  }

  function secondaryImgFileNames(arr) {
    if (arr.length < 1) {
      return arr;
    }

    return arr.map((img) => imgFileName(img));
  }
}
