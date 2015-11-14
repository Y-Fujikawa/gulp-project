var gulp      = require('gulp');
var sass      = require('gulp-ruby-sass');
var plumber   = require('gulp-plumber');

gulp.task('sass', function() {
  return sass('_src/sass/style.scss', { style: 'expanded', compass: true })
    .pipe(plumber())
    .pipe(gulp.dest('www/css/'));
});

gulp.task('watch', function() {
  gulp.watch('_src/sass/**/*.scss', ['sass']);
});
