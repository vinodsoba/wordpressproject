const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat-css');
const connect = require('gulp-connect');
const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');


gulp.task('sass', async function(){
    return gulp.src('assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(concatCss('styles.min.css'))
    .pipe(gulp.dest('web/app/themes/beautybop/css'))
    .pipe(connect.reload())
    .pipe(browserSync.stream());
});


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://dev.myproject.com/wordpressproject-master/web/",
        start: true
    });
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    
})

// connect live reload on browser
gulp.task('connect', function() {
    connect.server({
        connect: true
    });
});

gulp.watch('assets/sass/**/*.scss', gulp.series(['sass', ]));

gulp.task('default', gulp.series(['sass']), gulp.series(['watch']), gulp.series(['connect']), gulp.series(['browser-sync']));