var gulp = require('gulp'),
    include = require('gulp-include'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify'),
    sourceMaps = require('gulp-sourcemaps'),
    wrap = require('gulp-wrap');

gulp.task('stylesheets', function () {
    gulp.src('src/assets/stylesheets/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist/assets/stylesheets/'))
    ;
});

gulp.task('html', function () {
    gulp.src(['src/*.html', '!src/layout.html'])
        .pipe(wrap({ src: 'src/layout.html' }))
        .pipe(gulp.dest('dist'))
    ;
});

gulp.task('watch', function () {
    gulp.watch('src/assets/stylesheets/*.scss', ['stylesheets']);
    gulp.watch('src/assets/stylesheets/*/*.scss', ['stylesheets']);

    gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['stylesheets', 'html', 'watch']);