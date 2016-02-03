var fs = require('fs');
var yaml = require('js-yaml');
var addMetadata = require('solidus-metadata');

var metadata = yaml.safeLoad(fs.readFileSync('metadata.yml'));

module.exports = function (context) {
  addMetadata(context, metadata);
  return context;
};
