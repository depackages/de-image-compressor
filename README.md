# de-image-compressor

A simple Node.js package for compressing and resizing images using the Sharp library.

## Installation

To install this package, run the following command:

```bash
npm install de-image-compressor
```

or

```bash
bun install de-image-compressor
```


## Usage

The `compressImage` function takes an input image path, output image path, and optional options object as parameters. The options object can include a `quality` parameter to specify the JPEG compression quality.

```javascript
const compressImage = require('de-image-compressor');

const inputPath = 'input.jpg';
const outputPath = 'output.jpg';

compressImage(inputPath, outputPath, { quality: 30 }, (err, outputPath) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Compressed image saved at ${outputPath}`);
  }
});
```

## Supported Image Formats

The `de-image-compressor` package uses the Sharp library, which supports a wide range of image formats, including JPEG, PNG, WebP, GIF, TIFF, BMP, and more.