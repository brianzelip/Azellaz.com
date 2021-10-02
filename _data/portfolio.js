const fs = require('fs/promises'); // at least Node v14.x
const path = require('path');

/**
 * @returns arry of portfolio images data
 */
module.exports = async () => {
  try {
    const localDir = '/images/portfolio';
    const imagesDir = path.join(__dirname, `..${localDir}`);
    const imageFiles = await fs.readdir(imagesDir);

    return imageFiles.reduce((acc, file) => {
      acc.push({
        path: `${localDir}/${file}`,
        basename: file.split('.')[0]
      });

      return acc;
    }, []);
  } catch (err) {
    console.error(err);
  }
};
