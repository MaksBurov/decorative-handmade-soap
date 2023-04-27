const fs = require("fs");

module.exports = function () {
  $.gulp.task("views", () => {
    const onError = function (err) {
      $.glp.notify.onError({
        title: "Error in views",
        message: `File error in: ${err.message}`,
      })(err);

      this.emit("end");
    };

    return $.gulp
      .src($.paths.views.src)
      .pipe(
        $.glp.plumber({
          errorHandler: onError,
        })
      )
      .pipe(
        $.glp.data(function (file) {
          return JSON.parse(fs.readFileSync("./data/data.json"));
        })
      )
      .pipe(
        $.glp.pug({
          basedir: "src/views",
        })
      )
      .pipe($.gulp.dest($.paths.views.dist))
      .pipe($.browserSync.stream());
  });
};
