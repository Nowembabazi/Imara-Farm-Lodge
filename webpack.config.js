module.exports = {
    // ...
    module: {
      rules: [
        // Rule for CSS files
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Rule for source maps
        {
          test: /\.map$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
      ],
    },
    // ...
  };
  