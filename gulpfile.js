var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    cleanCss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');
var appName = 'appName';

// GENERAL TASKS
gulp.task('production', [
    'clean:production',
    'sass:production',
    'js:production',
    'html:production',
    'img:production'
]);
gulp.task('clean:production', function () {
    'use strict';

    return del(['dist/app', 'dist/assets/']);
});
gulp.task('img:production', function () {
    'use strict';

    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'));
});

// HTML TASKS
gulp.task('html:production', function () {
    'use strict';

    gulp.src('src/app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/app'));
});

// SASS AND CSS TASKS
// Compiles sass into css, then concats into a single css file
gulp.task('sass', function () {
    'use strict';

    gulp.src('src/assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/assets/css'));
});
// Runs sass task, then minifies single file to dist folder
gulp.task('sass:production', ['sass'], function () {
    'use strict';

    gulp.src('src/assets/css/styles.css')
        .pipe(cleanCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist/assets/css'));
});

// JAVASCRIPT TASKS
gulp.task('js:production', function () {
    'use strict';

    gulp.src('src/app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat(appName + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/app'));
});

// WATCHER TASKS
// Watches changes in sass files to call sass task
gulp.task('sass:watch', function () {
    'use strict';

    gulp.watch('src/assets/scss/**/*.scss', ['sass']);
});