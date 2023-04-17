const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

module.exports = function () {
    $.gulp.task('imagesFromSources', () => {
        return $.gulp.src($.paths.images.src + '**/*.{png,jpg,svg,gif}')
            //Минификация изображений
           .pipe($.gulp.src($.paths.sources.images + '**/*.{png,jpg,svg,gif}'))
           .pipe($.glp.imagemin([
                $.glp.imagemin.gifsicle({interlaced: true}),
                imageminJpegRecompress({
                    progressive: true,
                    max: 80,
                    min: 75
                }),
                imageminPngquant({
                    quality: [0.7, 0.8]
                }),
                $.glp.imagemin.svgo({
                    plugins: [{removeViewBox: false}]
                }),
                imageminWebp({quality: 50})
           ]))
           .pipe($.gulp.dest($.paths.images.dist))

           //Конвертирование в WebP
           .pipe($.gulp.src($.paths.sources.images + '**/*.{png,jpg}'))
           .pipe($.glp.webp({
               quality: 25,
               method: 6 //параметр контролирует компромисс между скоростью кодирования и размером и качеством сжатого файла (6 - самый медленный)
           }))
           .pipe($.gulp.dest($.paths.images.dist))
    })
}