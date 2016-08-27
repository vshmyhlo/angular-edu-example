module.exports = {
  entry: {
    path: './src/index'
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

// var path = require('path');
// var webpack = require('webpack');



// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './index'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   plugins: [
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel',
//         exclude: /node_modules/,
//         include: __dirname,
//         query: {
//           presets: ['react', 'es2015']
//         }
//       },
//       {
//         test: /\.css$/,
//         loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
//       },
//       { test: /\.png$/, loader: "url-loader?limit=100000" },
//       { test: /\.jpg$/, loader: "file-loader" }
//     ]
//   }
// }

// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './index'
//   ],
//   output: {
//     path: __dirname,
//     filename: "bundle.js"
//   },
//   module: {
//     loaders: [
//       // { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
//       // { test: /\.css$/, loader: "style!css" }
//       {
//         test: /\.js$/,
//         // include: path.join(__dirname, 'src'),
//         exclude: /node_modules/,
//         loaders: ['babel']
//         // loaders: ['babel-loader']
//         // loaders: ['babel', 'eslint']
//         // loaders: ['react-hot', 'babel', 'eslint']
//       },
//       // {
//       //   test: /(\.css|\.scss)$/,
//       //   include: path.join(__dirname, 'src'),
//       //   loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
//       // }
//     ]
//   }
// };
