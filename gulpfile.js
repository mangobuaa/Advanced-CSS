const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('default', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})