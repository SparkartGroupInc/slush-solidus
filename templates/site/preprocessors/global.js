var fs = require('fs');
var yaml = require('js-yaml');
var addMetadata = require('solidus-metadata');
var solidusAssetsProxy = require('solidus-assets-proxy');

var metadata = yaml.safeLoad(fs.readFileSync('metadata.yml'));

// Configure asset proxies for Imgix. See https://github.com/solidusjs/solidus-assets-proxy
var assetsProxy = solidusAssetsProxy({
  origins: [
    'http://wordpress.sparkart.com/wp-content/uploads/'
  ],
  proxy: 'http://images.sparkart.com'
});

module.exports = function (context) {
  addMetadata(context, metadata);
  assetsProxy.proxyContextAssets(context.resources);
  return context;
};
