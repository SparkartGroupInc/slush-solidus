// Controls responsive images. Docs here: https://github.com/imgix/imgix.js/blob/master/docs/api.md#imgix.fluid
var imgix = require('imgix.js');

module.exports = function () {
  imgix.fluid({
    pixelStep: 50,
    onChangeParamOverride: function (w, h, o, e) {
      return {fit: 'crop'};
    }
  });
};
