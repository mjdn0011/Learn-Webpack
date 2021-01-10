var path = require('path'); // Common.js

// "build": "webpack --mode=none --entry=src/index.js --output=public/output.js"
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  // output: './public/output.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
