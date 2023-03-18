module.exports = {
    views: {
        src: "./src/views/pages/**/*.pug",
        dist: "./dist",
        watch: "./src/views/**/*.pug"
    },
    styles: {
        src: "./src/styles/main.scss",
        dist: "./dist/public/styles/",
        watch: "./src/styles/**/*.{scss,sass}"
    },
    scripts: {
        src: './src/scripts/*.js',
        dist: './dist/public/scripts/',
        watch: './src/scripts/**/*.js'
    },
    fonts: {
        src: './src/assets/fonts/',
        dist: './dist/public/assets/fonts/',
        watch: './src/assets/fonts/*.{ttf,woff,woff2}'
    },
    images: {
        src: './src/assets/images/',
        dist: './dist/public/assets/images/',
        watch: './src/assets/images/**/*.{png,jpg,gif,svg}'
    },
    sources: {
        images: './src/assets/sources/images/',
        fonts: './src/assets/sources/fonts',
    }
}

