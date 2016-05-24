
import gulp       from 'gulp';

import sourcemaps from 'gulp-sourcemaps';
import babel      from 'gulp-babel';

gulp.task('build', () => {
  return gulp.src('./src/**/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["es2015", "react"]}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);

gulp.task('watch', ['default'], () => {
  return gulp.watch('./src/**/*.jsx', ['build']);
});