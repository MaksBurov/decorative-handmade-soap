module.exports = function () {
    $.gulp.task('clean', () => {
        return $.del(
            [
                $.paths.styles.dist,
                $.paths.scripts.dist
            ],
            {
                force: true, //удаление файлов за пределами каталога
            },
        )
            .then(path => {
                console.log('Deleted directories:\n',path.join('\n '))
            })
            
    })
}