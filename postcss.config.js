module.exports = {
    plugins: [
      require('autoprefixer')({
        cascade: true,
        grid: "autoplace" 
      }),
      require('postcss-flexbugs-fixes'),
      require('postcss-sort-media-queries')({
        sort: 'mobile-first'
      }),
      require('cssnano')({
        preset: 'default',
      }),
    ]
  }