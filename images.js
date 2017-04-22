/*
  This file was used to automate the process of updating all raw image  filenames to semantic filenames, as well as updating the relevant code that refers to these images. This file was used to create a desired output; it is preserved here for the sake of provenance.
*/

const fs = require('fs');

var rawImgNames = [
  "IMG_0535.JPG",
  "IMG_0562.JPG",
  "IMG_0574.JPG",
  "IMG_0890.JPG",
  "IMG_0893.JPG",
  "IMG_0896.JPG",
  "IMG_0899.JPG",
  "IMG_0902.JPG",
  "IMG_0904.JPG",
  "IMG_0905.JPG",
  "IMG_0912.JPG",
  "IMG_0916.JPG",
  "IMG_0918.JPG",
  "IMG_0921.jpg",
  "IMG_0924.JPG",
  "IMG_0927.JPG",
  "IMG_0932.JPG",
  "IMG_0934.JPG",
  "IMG_0947.JPG",
  "IMG_0950.JPG",
  "IMG_0953.JPG",
  "IMG_0962.JPG",
  "IMG_0965.JPG",
  "IMG_0966.JPG",
  "IMG_0971.JPG",
  "IMG_0978.JPG",
  "IMG_0979.JPG",
  "IMG_0981.JPG",
  "IMG_0986.JPG",
  "IMG_0995.JPG",
  "IMG_1001.jpg",
  "IMG_1003.JPG",
  "IMG_1005.JPG",
  "IMG_1010.JPG",
  "IMG_1015.JPG",
  "IMG_1020.JPG",
  "IMG_1021.JPG",
  "IMG_1026.JPG",
  "IMG_1032.JPG",
  "IMG_1038.JPG",
  "IMG_1042.JPG",
  "IMG_1045.JPG",
  "IMG_1053.JPG",
  "IMG_1059.JPG",
  "IMG_1060.JPG",
  "IMG_1062.JPG",
  "IMG_1067.JPG",
  "IMG_1071.JPG",
  "IMG_1081.JPG",
  "IMG_1093.JPG",
  "IMG_1095.JPG",
  "IMG_1099.JPG",
  "IMG_1101.JPG",
  "IMG_1102.JPG",
  "IMG_1104.JPG",
  "IMG_1109.JPG",
  "IMG_1111.JPG",
  "IMG_1113.JPG",
  "IMG_1115.JPG",
  "IMG_1116.JPG",
  "IMG_1123.JPG",
  "IMG_1125.JPG",
  "main_bag.jpg",
  "workspace_1.jpeg",
  "workspace_2.jpeg",
  "workspace_3.JPG"
];

var products = [
 {
   "id": "az0001",
   "name": "Indigo Shibori Duffle",
   "slug": "indigo-shibori-duffle",
   "url": "https://www.azellaz.com/indigo-shibori-duffle",
   "inStock": false,
   "price": "225.00",
   "type": "duffle",
   "descriptionShort": "Indigo-dyed waxed canvas and leather duffle.",
   "descriptionLong": "Sized to fit carry-on restrictions, this duffle is made to be your reliable travel companion. Includes two side pockets and one front pocket. Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 21 in wide x 8.5 in tall x 11.5 in deep",
   "weight": "907",
   "height": "23",
   "width": "31",
   "length": "53",
   "imgFront": "IMG_0535.JPG",
   "imgBack": "IMG_0562.JPG",
   "imgSide": "IMG_0574.JPG",
   "imgInside": "",
   "AZ notes for BZ": "all dimension measurements are in inches."
 },
 {
   "id": "az0002",
   "name": "Indigo Mountain Medium Tote",
   "slug": "indigo-mountain-medium-tote",
   "url": "https://www.azellaz.com/indigo-mountain-medium-tote",
   "inStock": false,
   "price": "120.00",
   "type": "tote",
   "descriptionShort": "Medium-sized indigo-dyed waxed canvas and leather tote with shoulder strap.",
   "descriptionLong": "This is the pocket-lover's tote! It includes four outside pockets in indigo-dyed waxed canvas and two internal pockets in navy cotton lining. It has both short tote straps and a removable shoulder strap. Fits a small laptop or tablet in addition to all of the essentials.  Includes all brass hardware and a Riri zipper. 16.5 in wide x 12 in tall x 3.5 in deep",
   "weight": "595",
   "height": "31",
   "width": "10",
   "length": "42",
   "imgFront": "IMG_0905.JPG",
   "imgBack": "IMG_0902.JPG",
   "imgSide": "IMG_0904.JPG",
   "imgInside": "IMG_0896.JPG",
   "AZ notes for BZ": "inside image same as Blue Medium Tote"
 },
 {
   "id": "az0003",
   "name": "Cerulean Medium Tote",
   "slug": "cerulean-medium-tote",
   "url": "https://www.azellaz.com/cerulean-medium-tote",
   "inStock": false,
   "price": "120.00",
   "type": "tote",
   "descriptionShort": "Medium-sized waxed canvas and leather tote with shoulder strap.",
   "descriptionLong": "This is the pocket-lover's tote! It includes four outside pockets in waxed canvas and two internal pockets in navy cotton lining. It has both short tote straps and a removable shoulder strap. Fits a small laptop or tablet in addition to all of the essentials.  Includes all brass hardware and a Riri zipper. 16.5 in wide x 12 in tall x 3.5 in deep",
   "weight": "595",
   "height": "31",
   "width": "10",
   "length": "42",
   "imgFront": "IMG_0899.JPG",
   "imgBack": "IMG_0890.JPG",
   "imgSide": "IMG_0893.JPG",
   "imgInside": "IMG_0896.JPG",
   "AZ notes for BZ": "inside image same as Indigo Mountain Medium Tote"
 },
 {
   "id": "az0004",
   "name": "Cerulean Small Tote",
   "slug": "cerulean-small-tote",
   "url": "https://www.azellaz.com/cerulean-small-tote",
   "inStock": false,
   "price": "70.00",
   "type": "tote",
   "descriptionShort": "Small waxed canvas and leather tote.",
   "descriptionLong": "This minimalist tote has two outside pockets and a magnetic snap closure. All brass hardware. 12.5 in wide x 12.5 in tall x 3.5 in deep",
   "weight": "454",
   "height": "33",
   "width": "9",
   "length": "33",
   "imgFront": "IMG_0912.JPG",
   "imgBack": "",
   "imgSide": "IMG_0916.JPG",
   "imgInside": "",
   "AZ notes for BZ": ""
 },
 {
   "id": "az0005",
   "name": "Indigo Shibori Small Tote",
   "slug": "indigo-shibori-small-tote",
   "url": "https://www.azellaz.com/indigo-shibori-small-tote",
   "inStock": false,
   "price": "70.00",
   "type": "tote",
   "descriptionShort": "Small indigo-dyed waxed canvas and leather tote.",
   "descriptionLong": "This minimalist tote has two outside pockets and a magnetic snap closure. All brass hardware. 12.5 in wide x 12.5 in tall x 3.5 in deep",
   "weight": "454",
   "height": "33",
   "width": "9",
   "length": "33",
   "imgFront": "IMG_0918.JPG",
   "imgBack": "",
   "imgSide": "IMG_0921.JPG",
   "imgInside": "",
   "AZ notes for BZ": ""
 },
 {
   "id": "az0006",
   "name": "Indigo Mountain Crossbody with Leather",
   "slug": "indigo-mountain-crossbody-with-leather",
   "url": "https://www.azellaz.com/indigo-mountain-crossbody-with-leather",
   "inStock": true,
   "price": "80.00",
   "type": "crossbody",
   "descriptionShort": "Indigo-dyed beeswaxed canvas and leather crossbody bag.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "284",
   "height": "25",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_0934.JPG",
   "imgBack": "IMG_0927.JPG",
   "imgSide": "IMG_0932.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0007",
   "name": "Indigo Prairie Crossbody with Leather",
   "slug": "indigo-prairie-crossbody-with-leather",
   "url": "https://www.azellaz.com/indigo-prairie-crossbody-with-leather",
   "inStock": true,
   "price": "80.00",
   "type": "crossbody",
   "descriptionShort": "Indigo-dyed beeswaxed canvas and leather crossbody bag.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "284",
   "height": "25",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_0962.JPG",
   "imgBack": "IMG_0950.JPG",
   "imgSide": "IMG_0953.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0008",
   "name": "Indigo Shibori Crossbody with Leather",
   "slug": "indigo-shibori-crossbody-with-leather",
   "url": "https://www.azellaz.com/indigo-shibori-crossbody-with-leather",
   "inStock": false,
   "price": "80.00",
   "type": "crossbody",
   "descriptionShort": "Indigo-dyed beeswaxed canvas and leather crossbody bag.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "284",
   "height": "25",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_0978.JPG",
   "imgBack": "IMG_0966.JPG",
   "imgSide": "IMG_0971.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0009",
   "name": "Cerulean Crossbody with Leather",
   "slug": "cerulean-crossbody-with-leather",
   "url": "https://www.azellaz.com/cerulean-crossbody-with-leather",
   "inStock": true,
   "price": "80.00",
   "type": "crossbody",
   "descriptionShort": "Crossbody bag made from beeswaxed canvas and leather.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "284",
   "height": "25",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_0979.JPG",
   "imgBack": "IMG_0986.JPG",
   "imgSide": "IMG_0981.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0010",
   "name": "Indigo Mountain Crossbody",
   "slug": "indigo-mountain-crossbody",
   "url": "https://www.azellaz.com/indigo-mountain-crossbody",
   "inStock": false,
   "price": "70.00",
   "type": "crossbody",
   "descriptionShort": "Indigo-dyed beeswaxed canvas crossbody bag.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand dyed with indigo and hand waxed with beeswax. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "227",
   "height": "24",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_1067.JPG",
   "imgBack": "IMG_1059.JPG",
   "imgSide": "IMG_1062.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0011",
   "name": "Indigo Prairie Crossbody",
   "slug": "indigo-prairie-crossbody",
   "url": "https://www.azellaz.com/indigo-prairie-crossbody",
   "inStock": true,
   "price": "70.00",
   "type": "crossbody",
   "descriptionShort": "Indigo-dyed beeswaxed canvas crossbody bag.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand dyed with indigo and hand waxed with beeswax. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "227",
   "height": "24",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_1032.JPG",
   "imgBack": "IMG_1020.JPG",
   "imgSide": "IMG_1026.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0012",
   "name": "Indigo Cloud Crossbody",
   "slug": "indigo-cloud-crossbody",
   "url": "https://www.azellaz.com/indigo-cloud-crossbody",
   "inStock": true,
   "price": "70.00",
   "type": "crossbody",
   "descriptionShort": "Indigo-dyed beeswaxed canvas crossbody bag.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand dyed with indigo and hand waxed with beeswax. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "227",
   "height": "24",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_1053.JPG",
   "imgBack": "IMG_1038.JPG",
   "imgSide": "IMG_1045.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0013",
   "name": "Indigo Shibori Crossbody",
   "slug": "indigo-shibori-crossbody",
   "url": "https://www.azellaz.com/indigo-shibori-crossbody",
   "inStock": true,
   "price": "70.00",
   "type": "crossbody",
   "descriptionShort": "Indigo-dyed beeswaxed canvas crossbody bag.",
   "descriptionLong": "An everyday bag that fits all of the essentials (phone, wallet, keys) + a few extras (book, sunglasses, etc). Each piece is hand dyed with indigo and hand waxed with beeswax. Includes all brass hardware and a Riri zipper. 11 in wide x 10 in tall x 2.5 in deep",
   "weight": "227",
   "height": "24",
   "width": "6",
   "length": "28",
   "imgFront": "IMG_1015.JPG",
   "imgBack": "IMG_1010.JPG",
   "imgSide": "IMG_1001.JPG",
   "imgInside": "IMG_0947.JPG",
   "AZ notes for BZ": "single inside image for all crossbodies"
 },
 {
   "id": "az0014",
   "name": "Indigo Mountain Clutch",
   "slug": "indigo-mountain-clutch",
   "url": "https://www.azellaz.com/indigo-mountain-clutch",
   "inStock": false,
   "price": "45.00",
   "type": "clutch",
   "descriptionShort": "Small indigo-dyed beeswaxed canvas and leather clutch.",
   "descriptionLong": "Great as an evening clutch or, without the strap, a pouch for organizing in a larger bag. Fits the essentials (phone, credit cards, keys). Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 7 in wide x 4.5 in tall x 1.5 in deep",
   "weight": "85",
   "height": "11",
   "width": "4",
   "length": "18",
   "imgFront": "IMG_1081.JPG",
   "imgBack": "IMG_1071.JPG",
   "imgSide": "",
   "imgInside": "IMG_1125.JPG",
   "AZ notes for BZ": ""
 },
 {
   "id": "az0015",
   "name": "Indigo Shibori Clutch",
   "slug": "indigo-shibori-clutch",
   "url": "https://www.azellaz.com/indigo-shibori-clutch",
   "inStock": false,
   "price": "45.00",
   "type": "clutch",
   "descriptionShort": "Small indigo-dyed beeswaxed canvas and leather clutch.",
   "descriptionLong": "Great as an evening clutch or, without the strap, a pouch for organizing in a larger bag. Fits the essentials (phone, credit cards, keys). Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 7 in wide x 4.5 in tall x 1.5 in deep ",
   "weight": "85",
   "height": "11",
   "width": "4",
   "length": "18",
   "imgFront": "IMG_1111.JPG",
   "imgBack": "IMG_1104.JPG",
   "imgSide": "IMG_1109.JPG",
   "imgInside": "",
   "AZ notes for BZ": ""
 },
 {
   "id": "az0016",
   "name": "Indigo Diagonal Clutch",
   "slug": "indigo-diagonal-clutch",
   "url": "https://www.azellaz.com/indigo-diagonal-clutch",
   "inStock": false,
   "price": "45.00",
   "type": "clutch",
   "descriptionShort": "Small indigo-dyed beeswaxed canvas and leather clutch.",
   "descriptionLong": "Great as an evening clutch or, without the strap, a pouch for organizing in a larger bag. Fits the essentials (phone, credit cards, keys). Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 7 in wide x 4.5 in tall x 1.5 in deep ",
   "weight": "85",
   "height": "11",
   "width": "4",
   "length": "18",
   "imgFront": "IMG_1115.JPG",
   "imgBack": "IMG_1093.JPG",
   "imgSide": "",
   "imgInside": "IMG_1102.JPG",
   "AZ notes for BZ": "inside = phone etc coming out"
 },
 {
   "id": "az0017",
   "name": "Indigo Prairie Clutch",
   "slug": "indigo-prairie-clutch",
   "url": "https://www.azellaz.com/indigo-prairie-clutch",
   "inStock": false,
   "price": "45.00",
   "type": "clutch",
   "descriptionShort": "Small indigo-dyed beeswaxed canvas and leather clutch.",
   "descriptionLong": "Great as an evening clutch or, without the strap, a pouch for organizing in a larger bag. Fits the essentials (phone, credit cards, keys). Each piece is hand dyed with indigo and hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 7 in wide x 4.5 in tall x 1.5 in deep ",
   "weight": "85",
   "height": "11",
   "width": "4",
   "length": "18",
   "imgFront": "IMG_1123.JPG",
   "imgBack": "",
   "imgSide": "",
   "imgInside": "",
   "AZ notes for BZ": "inside = phone etc coming out"
 },
 {
   "id": "az0018",
   "name": "Cerulean Clutch",
   "slug": "cerulean-clutch",
   "url": "https://www.azellaz.com/cerulean-clutch",
   "inStock": true,
   "price": "45.00",
   "type": "clutch",
   "descriptionShort": "Small beeswaxed canvas and leather clutch.",
   "descriptionLong": "Great as an evening clutch or, without the strap, a pouch for organizing in a larger bag. Fits the essentials (phone, credit cards, keys). Each piece is hand waxed with beeswax. The leather is hand veg-tanned in Italy. Includes all brass hardware and a Riri zipper. 7 in wide x 4.5 in tall x 1.5 in deep ",
   "weight": "85",
   "height": "11",
   "width": "4",
   "length": "18",
   "imgFront": "IMG_1116.JPG",
   "imgBack": "IMG_1095.JPG",
   "imgSide": "IMG_1099.JPG",
   "imgInside": "IMG_1101.JPG",
   "AZ notes for BZ": "inside = phone etc coming out"
 }
]

function rawToSemanticMap() {
  var names = rawImgNames;
  var nameMap = {};

  for (i=0; i<names.length; i++) {
    for (x=0; x<products.length; x++) {
      if (names[i] == products[x].imgFront) {
        products[x].imgFront = products[x].slug + '-front-by-Azellaz.jpg';
        nameMap[names[i]] = products[x].slug + '-front-by-Azellaz.jpg';
      }
      else if (names[i] == products[x].imgBack) {
        products[x].imgBack = products[x].slug + '-back-by-Azellaz.jpg';
        nameMap[names[i]] = products[x].slug + '-back-by-Azellaz.jpg';
      }
      else if (names[i] == products[x].imgSide) {
        products[x].imgSide = products[x].slug + '-side-by-Azellaz.jpg';
        nameMap[names[i]] = products[x].slug + '-side-by-Azellaz.jpg';
      }
      else if (names[i] == products[x].imgInside) {
        products[x].imgInside = products[x].slug + '-inside-by-Azellaz.jpg';
        nameMap[names[i]] = products[x].slug + '-inside-by-Azellaz.jpg';
      }
    }
  }

  // console.log('nameMap', nameMap);
  // return JSON.stringify(nameMap, null, '\t');
  // // return nameMap;

  // console.log('products', products);
  return JSON.stringify(products, null, '\t');
}

// rawToSemanticMap();

// fs.writeFile('imageNameMap.json', rawToSemanticMap(), (err) => {
//  if (err) throw err;
//  console.log('It\'s saved!');
// });

var _getAllFilesFromFolder = function(dir) {
  var files = [];

  fs.readdirSync(dir).forEach(function(file) {
    file = dir+'/'+file;
    var stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
        files = files.concat(_getAllFilesFromFolder(file))
    } else files.push(file);
  });

  // fs.writeFile('listOfFiles.js', files, (err) => {
  //  if (err) throw err;
  //  console.log('It\'s saved!');
  // });
  // console.log('typeof files', typeof(files));
  // return JSON.stringify(files, null, '\t');
  return files;
};

// fs.writeFile('listOfFiles.js', _getAllFilesFromFolder(__dirname + "/images/launch-photos-edited-imageOptimized"), (err) => {
//  if (err) throw err;
//  console.log('listOfFiles.js was written!');
// });



function renameFiles(files, map) {
  const dirPath = '/Users/brianzelip/WebProjects/Azellaz.com/images/launch-photos-edited-imageOptimized/';
  // let fileNames = files.map((file) => file.substr(dirPath.length));
  // console.log('fileNames', fileNames);

  var newFiles = [];
  files.map( (file) => {
    if ( map[file.substr(dirPath.length)] ) {
      newFiles.push(file.replace(file.substr(dirPath.length), map[file.substr(dirPath.length)]))
      fs.rename(file, file.replace(file.substr(dirPath.length), map[file.substr(dirPath.length)]));
    };
  } );
  // console.log('newFiles.length', newFiles.length);

  // fs.writeFile('listOfNewFiles.js', JSON.stringify(newFiles, null, '\t'), (err) => {
  //  if (err) throw err;
  //  console.log('listOfNewFiles.js was written!');
  // });

  // return renamedFiles;
}

function updateProducts() {
  fs.writeFile('_data/products.json', rawToSemanticMap() + '\n', (err) => {
   if (err) throw err;
   console.log('The new products file has been updated!!');
  });
  return;
}

// 1. Change the raw image filenames to semantic image filenames
// renameFiles(_getAllFilesFromFolder(__dirname + "/images/launch-photos-edited-imageOptimized"), rawToSemanticMap());

// 2. Overwrite `_data/products.json` file with a new object containing semantic image filenames
updateProducts();

/*
  REFERENCES
    - `fs.writeFile` with callback, https://nodejs.org/api/all.html#all_fs_writefile_file_data_options_callback

    - return an array of all files in a directory, http://stackoverflow.com/a/21459809/2145103

    - JSON.stringify with pretty indentation, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/
