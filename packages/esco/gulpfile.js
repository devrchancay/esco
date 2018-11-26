const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

gulp.task("global:styles", function() {
  return gulp
    .src("./src/styles/global.css")
    .pipe(postcss())
    .pipe(gulp.dest("./src/components/"));
});

gulp.task("styles", function() {
  return gulp
    .src("./src/components/**/**/styles/index.**.css")
    .pipe(postcss())
    .pipe(rename("index.css"))
    .pipe(gulp.dest("./src/components"));
});
