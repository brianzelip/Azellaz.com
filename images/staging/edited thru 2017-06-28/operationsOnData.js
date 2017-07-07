/*
const names = [
'Clutch - cerulean - lisaro leather',
'Clutch - indigo mountain - lisaro leather',
'Clutch - indigo mountain - maroon leather',
'Clutch - indigo shibori natural - lisaro leather',
'Clutch - indigo shibori natural - maroon leather',
'Clutch - indigo shibori white - lisaro leather',
'Clutch - indigo shibori white - maroon leather',
'Crossbody - cerulean - lisaro leather',
'Crossbody - indigo mountain - lisaro leather',
'Crossbody - indigo mountain',
'Crossbody - indigo prairie cloud - lisaro leather',
'Crossbody - indigo shibori white - lisaro leather',
'Crossbody - indigo shibori white - maroon leather',
'Crossbody - indigo shibori white',
'Duffle - indigo shibori',
'Medium tote - cerulean - maroon leather',
'Medium tote - indigo mountain - tan leather',
'Medium tote - indigo shibori natural - maroon leather',
'Medium tote - indigo shibori natural - tan leather',
'Small tote - cerulean - maroon leather',
'Small tote - indigo mountain - maroon leather ',
'Small tote - indigo mountain - tan leather',
'Small tote - indigo shibori white - black leather'
]

function makeSlugs(arr) {
  return arr
    .map( str => str.trim().toLowerCase().replace(/ - /g, '-').replace(/\s+/g, '-') )
}

console.log(makeSlugs(names))
*/

const fs = require('fs');

// var products = [
//  {
//    "id": "AZ0010",
//    "name": "Clutch - cerulean - lisaro",
//    "slug": "clutch-cerulean-lisaro-leather",
//    "displayName": "Cerulean Clutch // Lisaro Leather",
//    "type": "Clutch",
//    "stockOnHand": 0,
//    "basePrice": 45,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "y",
//    "imgStrap2": "y",
//    "imgStrap3": "y"
//  },
//  {
//    "id": "AZ0011",
//    "name": "Clutch - indigo mountain - lisaro",
//    "slug": "clutch-indigo-mountain-lisaro-leather",
//    "displayName": "Indigo Mountain Clutch // Lisaro Leather",
//    "type": "Clutch",
//    "stockOnHand": 0,
//    "basePrice": 45,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "",
//    "imgInside": "y",
//    "imgStrap1": "y",
//    "imgStrap2": "y",
//    "imgStrap3": "y"
//  },
//  {
//    "id": "AZ0012",
//    "name": "Clutch - indigo mountain - maroon",
//    "slug": "clutch-indigo-mountain-maroon-leather",
//    "displayName": "Indigo Mountain Clutch // Maroon Leather",
//    "type": "Clutch",
//    "stockOnHand": 0,
//    "basePrice": 45,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "",
//    "imgInside": "y",
//    "imgStrap1": "y",
//    "imgStrap2": "y",
//    "imgStrap3": "y"
//  },
//  {
//    "id": "AZ0014",
//    "name": "Clutch - indigo shibori natural - lisaro",
//    "slug": "clutch-indigo-shibori-natural-lisaro-leather",
//    "displayName": "Indigo Shibori Clutch // Lisaro Leather",
//    "type": "Clutch",
//    "stockOnHand": 0,
//    "basePrice": 45,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "",
//    "imgInside": "y",
//    "imgStrap1": "y",
//    "imgStrap2": "y",
//    "imgStrap3": "y"
//  },
//  {
//    "id": "AZ0015",
//    "name": "Clutch - indigo shibori natural - maroon",
//    "slug": "clutch-indigo-shibori-natural-maroon-leather",
//    "displayName": "Indigo Shibori Clutch // Maroon Leather",
//    "type": "Clutch",
//    "stockOnHand": 0,
//    "basePrice": 45,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "",
//    "imgInside": "y",
//    "imgStrap1": "y",
//    "imgStrap2": "y",
//    "imgStrap3": "y"
//  },
//  {
//    "id": "AZ0016",
//    "name": "Clutch - indigo shibori white - lisaro",
//    "slug": "clutch-indigo-shibori-white-lisaro-leather",
//    "displayName": "Indigo Shibori Clutch // Lisaro Leather",
//    "type": "Clutch",
//    "stockOnHand": 0,
//    "basePrice": 45,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0017",
//    "name": "Clutch - indigo shibori white - maroon",
//    "slug": "clutch-indigo-shibori-white-maroon-leather",
//    "displayName": "Indigo Shibori Clutch // Maroon Leather",
//    "type": "Clutch",
//    "stockOnHand": 0,
//    "basePrice": 45,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "",
//    "imgInside": "y",
//    "imgStrap1": "y",
//    "imgStrap2": "y",
//    "imgStrap3": "y"
//  },
//  {
//    "id": "AZ0019",
//    "name": "Crossbody - cerulean - lisaro",
//    "slug": "crossbody-cerulean-lisaro-leather",
//    "displayName": "Cerulean Crossbody // Lisaro Leather",
//    "type": "Crossbody",
//    "stockOnHand": 0,
//    "basePrice": 90,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "y",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0020",
//    "name": "Crossbody - indigo mountain - lisaro",
//    "slug": "crossbody-indigo-mountain-lisaro-leather",
//    "displayName": "Indigo Mountain Crossbody // Lisaro Leather",
//    "type": "Crossbody",
//    "stockOnHand": 0,
//    "basePrice": 90,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0022",
//    "name": "Crossbody - indigo mountain - no leather",
//    "slug": "crossbody-indigo-mountain",
//    "displayName": "Indigo Mountain Crossbody",
//    "type": "Crossbody",
//    "stockOnHand": 0,
//    "basePrice": 70,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0023",
//    "name": "Crossbody - indigo prairie cloud - lisaro",
//    "slug": "crossbody-indigo-prairie-cloud-lisaro-leather",
//    "displayName": "Indigo Prairie Crossbody // Lisaro Leather",
//    "type": "Crossbody",
//    "stockOnHand": 0,
//    "basePrice": 90,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0025",
//    "name": "Crossbody - indigo shibori white - lisaro",
//    "slug": "crossbody-indigo-shibori-white-lisaro-leather",
//    "displayName": "Indigo Shibori Crossbody // Lisaro Leather",
//    "type": "Crossbody",
//    "stockOnHand": 0,
//    "basePrice": 90,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0026",
//    "name": "Crossbody - indigo shibori white - maroon",
//    "slug": "crossbody-indigo-shibori-white-maroon-leather",
//    "displayName": "Indigo Shibori Crossbody // Maroon Leather",
//    "type": "Crossbody",
//    "stockOnHand": 0,
//    "basePrice": 90,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0027",
//    "name": "Crossbody - indigo shibori white - no leather",
//    "slug": "crossbody-indigo-shibori-white",
//    "displayName": "Indigo Shibori Crossbody",
//    "type": "Crossbody",
//    "stockOnHand": 0,
//    "basePrice": 70,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0028",
//    "name": "Duffle - indigo shibori",
//    "slug": "duffle-indigo-shibori",
//    "displayName": "Indigo Shibori Duffle // Lisaro Leather",
//    "type": "Duffle",
//    "stockOnHand": 0,
//    "basePrice": 250,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0029",
//    "name": "Medium tote - cerulean - maroon",
//    "slug": "medium-tote-cerulean-maroon-leather",
//    "displayName": "Cerulean Medium Tote // Maroon Leather",
//    "type": "Medium Tote",
//    "stockOnHand": 2,
//    "basePrice": 150,
//    "imgFront": "y",
//    "imgBack": "y",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0032",
//    "name": "Medium tote - indigo mountain - tan",
//    "slug": "medium-tote-indigo-mountain-tan-leather",
//    "displayName": "Indigo Mountain Medium Tote // Tan Leather",
//    "type": "Medium Tote",
//    "stockOnHand": 1,
//    "basePrice": 150,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0033",
//    "name": "Medium tote - indigo shibori natural - maroon",
//    "slug": "medium-tote-indigo-shibori-natural-maroon-leather",
//    "displayName": "Indigo Shibori Medium Tote // Maroon Leather",
//    "type": "Medium Tote",
//    "stockOnHand": 1,
//    "basePrice": 150,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0034",
//    "name": "Medium tote - indigo shibori natural - tan",
//    "slug": "medium-tote-indigo-shibori-natural-tan-leather",
//    "displayName": "Indigo Shibori Medium Tote // Tan Leather",
//    "type": "Medium Tote",
//    "stockOnHand": 1,
//    "basePrice": 150,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "y",
//    "imgInside": "y",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0035",
//    "name": "Small tote - cerulean - maroon",
//    "slug": "small-tote-cerulean-maroon-leather",
//    "displayName": "Cerulean Small Tote // Maroon Leather",
//    "type": "Small tote",
//    "stockOnHand": 1,
//    "basePrice": 75,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "y",
//    "imgInside": "",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0037",
//    "name": "Small tote - indigo mountain - maroon",
//    "slug": "small-tote-indigo-mountain-maroon-leather",
//    "displayName": "Indigo Mountain Small Tote // Maroon Leather",
//    "type": "Small tote",
//    "stockOnHand": 0,
//    "basePrice": 75,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "y",
//    "imgInside": "",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0038",
//    "name": "Small tote - indigo mountain - tan",
//    "slug": "small-tote-indigo-mountain-tan-leather",
//    "displayName": "Indigo Mountain Small Tote // Tan Leather",
//    "type": "Small tote",
//    "stockOnHand": 2,
//    "basePrice": 75,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "y",
//    "imgInside": "",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  },
//  {
//    "id": "AZ0042",
//    "name": "Small tote - indigo shibori white - black",
//    "slug": "small-tote-indigo-shibori-white-black-leather",
//    "displayName": "Indigo Shibori Small Tote // Black Leather",
//    "type": "Small tote",
//    "stockOnHand": 0,
//    "basePrice": 75,
//    "imgFront": "y",
//    "imgBack": "",
//    "imgSide": "y",
//    "imgInside": "",
//    "imgStrap1": "",
//    "imgStrap2": "",
//    "imgStrap3": ""
//  }
// ]
//
// function addImgFileNames(obj) {
//   const suffix = '-by-Azellaz.jpg'
//   const [Front, Back, Side, Inside, Strap1, Strap2, Strap3] = ['-front', '-back', '-side', '-inside', '-strap1', '-strap2', '-strap3']
//   if (obj.imgFront === 'y') { obj.imgFront = obj.slug + Front + suffix }
//   if (obj.imgBack === 'y') { obj.imgBack = obj.slug + Back + suffix }
//   if (obj.imgSide === 'y') { obj.imgSide = obj.slug + Side + suffix }
//   if (obj.imgInside === 'y') { obj.imgInside = obj.slug + Inside + suffix }
//   if (obj.imgStrap1 === 'y') { obj.imgStrap1 = obj.slug + Strap1 + suffix }
//   if (obj.imgStrap2 === 'y') { obj.imgStrap2 = obj.slug + Strap2 + suffix }
//   if (obj.imgStrap3 === 'y') { obj.imgStrap3 = obj.slug + Strap3 + suffix }
//   return obj;
// }

//console.log(products.map( (product) => addImgFileNames(product) ));

// var json;
//
// fs.readFile('_products.json', (err, data) => {
//   if (err) throw err;
//   json = JSON.parse(data);
//   // console.log(json.length);
//   console.log(json.map( (product) => addImgFileNames(product) ));
//   fs.writeFile('products.json', JSON.stringify(json, null, 2), (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
// });


var newP = require("./newProducts.json");
// represents the latest version of the next version of the products.json data file

var oldP = require("./oldProducts.json");
// represents the current version of the products.json data file in production


function updateData(nData, oData) {
  return nData
    .map( (obj) => {
      for (let i=0; i<oData.length; i++) {
        if (oData[i].id == obj.OLDid) {
          obj.descriptionShort = oData[i].descriptionShort;
          obj.descriptionLong = oData[i].descriptionLong;
          obj.weight = oData[i].weight;
          obj.height = oData[i].height;
          obj.width = oData[i].width;
          obj.length = oData[i].length;
        };
      };
      obj.url = `https://www.azellaz.com/${obj.slug}`;
      obj.thumbSmallFront = `thumb-sm-${obj.imgFront}`;
      return obj;
    });
};

console.log(updateData(newP, oldP));

fs.writeFile('newProducts2.json', JSON.stringify(updateData(newP, oldP), null, 2), (err) => {
  if (err) throw err;
  console.log('newProducts2.json has been saved!');
});
