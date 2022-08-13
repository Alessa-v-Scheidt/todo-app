// const autoprefixer = require('autoprefixer');
// const nested = require('postcss-nested');
// const presetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    // autoprefixer,
    // eslint-disable-next-line global-require
    require('postcss-nested'),
    // presetEnv,
  ],
};
