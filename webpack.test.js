const path = require('path');
 const webpack = require('webpack');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   plugins: [
     new webpack.ProvidePlugin({
       _: 'lodash',
     })
   ]
  };

       <script>
       var modernBrowser = (
         'fetch' in window &&
         'assign' in Object
       );

       if ( !modernBrowser ) {
         var scriptElement = document.createElement('script');

         scriptElement.async = false;
         scriptElement.src = '/polyfills.bundle.js';
         document.head.appendChild(scriptElement);
       }
     </script>