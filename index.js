const sharp = require('sharp');

function compressImage(inputPath, outputPath, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  const { quality = 50 } = options;

  sharp(inputPath)
    .resize(1000)
    .jpeg({ quality })
    .toFile(outputPath, (err, info) => {
      if (err) {
        callback(err);
      } else {
        callback(null, outputPath);
      }
    });
}


module.exports = compressImage;
