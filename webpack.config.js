const isDevelopment = !process.argv.includes('build')

module.exports = {
    output: {
        publicPath: '/scripts/',
        filename:  '[name].js'
    },
    watch:   false,
    devtool: isDevelopment ? 'eval' : false,

    module:  {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
}
