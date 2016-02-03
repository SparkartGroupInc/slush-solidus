var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('minimist')(process.argv.slice(2));

var options = {
  siteName: argv.name || 'New Solidus Site',
  siteSlug: argv.name.toLowerCase().replace(/ /g, '-') || 'new-solidus-site'
};

gulp.task('default', function(done) {
  gulp.src(__dirname + '/templates/site/**/{*,.*}')
    .pipe(template(options))
    .pipe(gulp.dest('./' + options.siteSlug));
});

