var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var broadway = require('@sparkart/broadway/tasks');

gulp.task('default', ['lint', 'build', 'watch']);
gulp.task('build', ['modernizr', 'compileJS', 'compileCSS']);

gulp.task('modernizr', function () {
  gulp.src('assets/scripts/**/*.js')
    .pipe(modernizr({ // See https://github.com/Modernizr/customizr#config-file for available options
      'options': ['setClasses']
    }))
    .pipe(gulp.dest('assets/compiled'));
});

gulp.task('compileJS', function () {
  return broadway.browserify('assets/scripts/index.js')
    .on('error', broadway.handleErrors)
    .pipe(gulp.dest('assets/compiled'));
});

gulp.task('compileCSS', function () {
  return gulp.src('assets/styles/index.scss')
    .pipe(broadway.compileSass('index.css'))
    .on('error', broadway.handleErrors)
    .pipe(gulp.dest('assets/compiled'));
});

gulp.task('fingerprint', function () {
  return gulp.src(['assets/**/*', '!assets/{scripts,styles}/**/*', 'views/**/*'], { base: process.cwd() })
    .pipe(broadway.fingerprint())
    .on('error', broadway.handleErrors)
    .pipe(gulp.dest(process.cwd()));
});

gulp.task('watch', function () {
  gulp.watch('assets/styles/**/*', ['compileCSS']);
  gulp.watch('assets/scripts/**/*', ['compileJS']);
  broadway.watch('assets/compiled/**/*');
});

gulp.task('lint', function () {
  return gulp.src(broadway.lint.glob)
    .pipe(broadway.lint())
    .on('error', broadway.handleErrors);
});
