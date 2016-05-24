
import gulp       from 'gulp';

import sourcemaps from 'gulp-sourcemaps';
import babel      from 'gulp-babel';
import copy       from 'gulp-copy';

import babelify   from 'babelify';
import browserify from 'browserify';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import plumber    from 'gulp-plumber';
import uglify     from 'gulp-uglify';

gulp.task('build:test', ['build', 'copy:css'], () => {
  
  let opts = {
    entries: ['./test-src/index.jsx'],
    transform: [['babelify', { presets:["es2015", "react"], ignore: ["./src/libs/**"] }]],
    ignore: ['./src/libs/**']
  };
  
  return browserify(opts).bundle()
    .on('error', (err) => {
       console.log(err.message);
       this.emit('end');
    })
    .pipe(plumber())
    .pipe(source('demo.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./demo/js'));   
});

gulp.task('build', () => {
  return gulp.src('./src/**/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["es2015", "react"]}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./test-src/.ui'));
});

gulp.task('copy:css', () => {
  return gulp.src('./node_modules/starlight-ui/dist/**/*')
    .pipe(gulp.dest('./demo'));
});

gulp.task('default', ['build', 'build:test']);

gulp.task('watch', ['default'], () => {
  return [ 
    gulp.watch('./src/**/*.jsx', ['build']),
    gulp.watch('./test-src/**/*.jsx', ['build:test'])
  ];
});