var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('serve',function() {
    
    browserSync.instance =  browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('app/**/*.html').on('change', browserSync.reload);

});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            indentType: 'tab',
            sourceComments: false
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});