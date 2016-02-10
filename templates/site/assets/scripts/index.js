/*
All your JS starts here!
Use browserify (http://browserify.org/) to include more JS files.
You can use `gulp build` to write the compiled file to /assets/compiled/index.js
*/
var responsiveImages = require('./images');

document.addEventListener('DOMContentLoaded', function (e) {
  responsiveImages();
});
