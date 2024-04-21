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

## License

Copyright (c) 2024 charanmadhu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
