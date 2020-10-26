/**
 * The only reason we are adding this file is so that the WebStorm IDE will map the aliases as Resource Roots in the
 * project. The aliases here should be the same ones defined in snowpack.config.js
 */
const path = require('path');
module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@atoms': path.resolve(__dirname, 'src/context/'),
    },
  },
};