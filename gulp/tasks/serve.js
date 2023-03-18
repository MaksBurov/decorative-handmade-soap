module.exports = function () {
    $.gulp.task("serve", () => {
        $.browserSync.init({
            server: {
                baseDir: "./dist"
            },
            port: 8080,
            notify: false,
            // ui: {
            //     port: 8081
            // }
            ui: false
        });
    })
}