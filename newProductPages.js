const fs = require('fs');
const get = require('simple-get');
require('dotenv').config();

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
  console.log(`Generating new Azellaz product pages in ${productPagesDir} ...`);

  const snipApi = 'https://app.snipcart.com/api/products?limit=100';
  const snipKey = process.env.SNIP_LIVE;
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

        const data = cleanData(_data);

        const pageContent = `---
layout: product
permalink: "/${data.slug}/"
name: "${data.name}"
displayName: "${data.displayName}"
slug: "${data.slug}"
id: "${data.id}"
currentListing: ${data.currentListing}
stockOnHand: ${getStockFromSnipcart(data.id)}
type: ${jsArray2Yaml(data.type)}
descriptionShort: "${data.descriptionShort}"
materials: ${jsArray2Yaml(data.materials)}
price: ${data.price}
weight: ${data.weight}
height: ${data.height}
width: ${data.width}
length: ${data.length}
imgPrimary: "${imgFileName(data.imgPrimary)}"
imgSecondarySet: ${jsArray2Yaml(secondaryImgFileNames(data.imgSecondarySet))}
---

${data.body}
`;
        fs.writeFileSync(`${productPagesDir}${data.slug}.md`, pageContent);
        console.log(`${count}. ${data.slug}.md`);
      } else {
        return;
      }
    });

    function getStockFromSnipcart(id) {
      const item = snipData.items.filter(
        (item) => item.userDefinedId === id
      )[0];

      return item.stock;
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
