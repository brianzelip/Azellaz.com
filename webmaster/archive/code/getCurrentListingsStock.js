// outputs the number of stock for each of the current product listings
// 2020-04-25
const fs = require('fs');

const productsDir = '_data/products';

const files = fs.readdirSync(productsDir);

const output = files
  .filter((file) => {
    const data = JSON.parse(fs.readFileSync(`${productsDir}/${file}`, 'utf-8'));
    return data.currentListing ? true : false;
  })
  .map((file) => {
    const data = JSON.parse(fs.readFileSync(`${productsDir}/${file}`), 'utf-8');
    return {
      id: data.id,
      name: data.name,
      displayName: data.displayName,
      stock: data.stockOnHand,
      img: data.imgPrimary
    };
  })
  .reduce((acc, product) => {
    const row = `${product.stock}, ${product.id}, ${product.displayName}\n`;
    acc += row;
    return acc;
  }, '');

console.log('output', output);
fs.writeFileSync('./output.csv', output);
