const gulp = require('gulp');
const postcss = require('gulp-postcss');

const paths = {
  globalFile: './src/styles/global.css',
  defaultStyles: './src/defaultStyles/**/**/**.css',
};

gulp.task('global:styles', function() {
  return gulp
    .src(paths.globalFile)
    .pipe(postcss())
    .pipe(gulp.dest('./src/components/'));
});

gulp.task('styles', function() {
  return gulp
    .src(paths.defaultStyles)
    .pipe(postcss())
    .pipe(gulp.dest('./src/components'));
});

gulp.task('styles:watch', function() {
  gulp.watch(paths.defaultStyles, ['styles']);
});

gulp.task('default', ['global:styles', 'styles', 'styles:watch']);
