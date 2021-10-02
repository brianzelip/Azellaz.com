const fs = require('fs');

const productDataDir = './_data/products/';

const dataFiles = fs.readdirSync(productDataDir);

dataFiles.forEach(path => {
  const _data = JSON.parse(fs.readFileSync(`${productDataDir}${path}`));
  if (_data.type === 'medium tote') {
    _data.type = 'tote';
  }
  _data.type = [`${_data.type}`];
  fs.writeFileSync(`${productDataDir}${path}`, JSON.stringify(_data, null, 2));
});
