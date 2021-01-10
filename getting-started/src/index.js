// var _ = require('lodash'); // ES5 - Common.js
import _ from 'lodash'; // ES6 - Modules

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  // element.innerHTML = 'Hello webpack';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
