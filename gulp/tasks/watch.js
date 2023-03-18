module.exports = function () {
    $.gulp.task("watch", () => {
        $.gulp.watch($.paths.views.watch, $.gulp.series('views'))
        $.gulp.watch($.paths.styles.watch, $.gulp.series('styles'))
        $.gulp.watch($.paths.scripts.watch, $.gulp.series('scripts'))
        $.gulp.watch($.paths.fonts.watch, $.gulp.series('fonts'))
        $.gulp.watch($.paths.images.watch, $.gulp.series('images'))
    })
}