const   webpackStream = require('webpack-stream'),
        webpack = webpackStream.webpack,
        named = require('vinyl-named')

module.exports = function () {
    $.gulp.task('scripts', () => {

        const onError = function(err) {
            $.glp.notify.onError({
                title: "Error in scripts",
                message: `File error in: ${err.message}`,
            })(err);

            this.emit('end');
        };

        return $.gulp.src($.paths.scripts.src)
            .pipe($.glp.plumber({
                errorHandler: onError
            }))
            .pipe(named())
            .pipe(webpackStream($.webpackConfig), webpack)
            .pipe($.glp.if($.argv.build, $.glp.uglify()))
            .pipe(
                $.glp.rename({
                    extname: '.min.js' //переименовываем файл
                })
            )
            .pipe($.gulp.dest($.paths.scripts.dist))
            .pipe($.browserSync.stream())
    })
}
