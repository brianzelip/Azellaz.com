const fs = require('fs');
const data = require('./imageSets.json');

console.log(`data.products.length`, data.products.length);
console.log(`data.confirmed.length`, data.confirmed.length);

const overlapping = data.products.filter(img => data.confirmed.includes(img));
const missing = data.products.filter(img => !data.confirmed.includes(img));

fs.writeFileSync('./missingImages.json', JSON.stringify(missing, null, 2));
fs.writeFileSync(
  './overlappingImages.json',
  JSON.stringify(overlapping, null, 2)
);
