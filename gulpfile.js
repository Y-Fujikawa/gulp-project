var gulp      = require('gulp');
var sass      = require('gulp-ruby-sass');

gulp.task('sass', function() {
  return sass('_src/sass/')
    .pipe(plumber)
    .pipe(gulp.dest('www/css/'));
});

gulp.task('watch', function() {
  gulp.watch('_src/sass/**/*.scss', ['sass']);
});

