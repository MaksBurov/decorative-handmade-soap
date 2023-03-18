module.exports = function () {
    $.gulp.task("views", () => {

        const onError = function(err) {
            $.glp.notify.onError({
                title: "Error in views",
                message: `File error in: ${err.message}`,
              })(err);
    
            this.emit('end');
        };

        return $.gulp.src($.paths.views.src)
            .pipe($.glp.plumber({
                errorHandler: onError
            })) 
            .pipe($.glp.pug({
                basedir: 'src/views'
            }))
            .pipe($.gulp.dest($.paths.views.dist))
            .pipe($.browserSync.stream())
    })
}