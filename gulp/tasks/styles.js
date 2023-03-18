const sass = require('gulp-sass')(require('sass'));

module.exports = function () {
    $.gulp.task("styles", () => {

        const onError = function(err) {
            $.glp.notify.onError({
                title: "Error in styles",
                message: `File error in: ${err.message}`,
              })(err);
    
            this.emit('end');
        };


        return $.gulp.src($.paths.styles.src)
            .pipe($.glp.plumber({
                errorHandler: onError
            })) 
            .pipe($.glp.if(!$.argv.build, $.glp.sourcemaps.init()))
            .pipe(sass.sync().on('error', sass.logError))
            .pipe($.glp.if($.argv.build, $.glp.postcss()))
            .pipe($.glp.if(!$.argv.build, $.glp.sourcemaps.write()))
            .pipe(
                $.glp.rename({
                    extname: '.min.css' //переименовываем файл
                })
            )
            .pipe($.gulp.dest($.paths.styles.dist))
            .pipe($.browserSync.stream())
    })
}
