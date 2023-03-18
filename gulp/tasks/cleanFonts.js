module.exports = function () {
    $.gulp.task('cleanFonts', () => {
        return $.del(
            [
                $.paths.fonts.src + '*.{ttf,woff,woff2}'
            ],
            {
                force: true, //удаление файлов за пределами каталога
            },
        )
            .then(path => {
                if ( path.length > 0 )
                    console.log('Deleted files in directories:\n', path.join('\n '))
                else console.log('No new fonts')
            })
            
    })
}