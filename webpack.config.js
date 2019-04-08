const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

console.log( __dirname, '-----', path.resolve(__dirname, 'dist'), path.join(__dirname, 'dist'))

module.exports = env => {
    console.log('env: ', env);
    console.log('NODE_ENV: ', env.NODE_ENV);
    console.log('Production: ', env.production);

    return {
        //   mode: 'development',
        //   devtool: 'inline-source-map',
        //   devServer: {
        //       contentBase: './dist',
        //     //   hot: true,
        //   },
          plugins: [
              new CleanWebpackPlugin(),
              new HtmlWebpackPlugin({
                  title: 'caching'
              }),
              new webpack.HashedModuleIdsPlugin()
            //   new webpack.HotModuleReplacementPlugin(),
            //   new BundleAnalyzerPlugin({
            //     generateStatsFile: true
            //   })
          ],
          entry: {
            app: './src/index.js',
          },
          output: {
            filename: '[name].[contenthash].js',
            // chunkFilename: '[name].chunk.js',
            path: path.resolve(__dirname, 'dist'),
          },
          optimization: {
              runtimeChunk: 'single',
              splitChunks: {
                  cacheGroups: {
                      vendor: {
                          test: /[\\/]node_modules[\\/]/,
                          name: 'verdorss',
                          chunks: 'all'
                      }
                  }
              }
          },
          module: {
              rules: [
                  {
                      test: /\.css$/,
                      use: [
                          'style-loader',
                          'css-loader'
                      ]
                  },
                  {
                      test: /\.(png|svg|jpg|jpeg|gif)$/,
                      use: [
                          'file-loader'
                      ]
                  },
                  {
                      test: /\.(woff|woff2|eot|ttf|otf)$/,
                      use: [
                          'file-loader'
                      ]
                  },
                  {
                      test: /\.(csv|tsv)$/,
                      use: [
                          'csv-loader'
                      ]
                  },
                  {
                      test: /\.xml$/,
                      use: [
                          'xml-loader'
                      ]
                  }
              ]
          },
        }
};