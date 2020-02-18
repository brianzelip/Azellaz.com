const fs = require('fs');
const data = require('./_data/products.json');

const allImagesUsedInProducts = {
  primary: [],
  secondary: []
};

data.forEach(obj => {
  allImagesUsedInProducts.primary.push(obj.imgPrimary);
  console.log(`Just pushed ${obj.imgPrimary} to primary!`);
  obj.imgSecondarySet.forEach(img => {
    allImagesUsedInProducts.secondary.push(img);
    console.log(`Just pushed ${img} to secondary!`);
  });
});

fs.writeFileSync(
  './allImagesUsedInProducts.json',
  JSON.stringify(allImagesUsedInProducts, null, 2)
);

const primaryDupes = allImagesUsedInProducts.primary.filter(
  img =>
    allImagesUsedInProducts.primary.indexOf(img) !==
    allImagesUsedInProducts.primary.lastIndexOf(img)
);
const secondaryDupes = allImagesUsedInProducts.secondary.filter(
  img =>
    allImagesUsedInProducts.secondary.indexOf(img) !==
    allImagesUsedInProducts.secondary.lastIndexOf(img)
);
const crossDupes = allImagesUsedInProducts.primary.filter(img =>
  allImagesUsedInProducts.secondary.includes(img)
);

console.log(`\n\nprimaryDupes === `, primaryDupes);
console.log('primaryDupes.length', primaryDupes.length);
console.log(`\n\nsecondaryDupes === `, secondaryDupes);
console.log('secondaryDupes.length', secondaryDupes.length);
console.log(`\n\ncrossDupes === `, crossDupes);
console.log('crossDupes.length', crossDupes.length);
