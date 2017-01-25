const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>{
  browserSync.init({
    server: './'
  });
  gulp.watch('./*.html').on('change',browserSync.reload);
  gulp.watch('./vistas/*.html').on('change',browserSync.reload);
  gulp.watch('./css/*.css').on('change',browserSync.reload);
  gulp.watch('./js/*.js').on('change',browserSync.reload);
  gulp.watch('./js/servicios/*.js').on('change',browserSync.reload);
  gulp.watch('./js/controladores/*.js').on('change',browserSync.reload);
  gulp.watch('./css/*.sass', ['sass']);//.on('change', )
})
gulp.task('sass', () =>{
  gulp.src('./css/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
      versions: ['last 2 browers']
    }))
    .pipe(gulp.dest('./css'))
})
