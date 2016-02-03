var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('minimist')(process.argv.slice(2));

var options = {
  siteName: argv.name || 'New Solidus Site',
  siteSlug: argv.name.toLowerCase().replace(' ', '-') || 'new-solidus-site'
};

gulp.task('default', function(done) {
  console.log('Args: ', gulp.args);
  console.log('Argv: ', argv);
  gulp.src(__dirname + '/templates/site/**/{*,.*}')
    .pipe(template(options))
    .pipe(gulp.dest('./' + options.siteName));
});

