var gulp = require('gulp')
  , uglify = require('gulp-uglify')
  , fs = require('fs')
  , rename = require('gulp-rename');

gulp.task('minify', function () {
  gulp.src('viewmaster.js')
  .pipe(uglify())
  .pipe(rename('viewmaster.min.js'))
  .pipe(gulp.dest('.'))
 });

gulp.task('default', ['minify']);
