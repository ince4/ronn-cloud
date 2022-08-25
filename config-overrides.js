/* eslint-disable react-hooks/rules-of-hooks */
/* config-overrides.js */
const { useBabelRc, override } = require('customize-cra')

const config = override(useBabelRc())

module.exports = config

// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//   config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
//   return config;
// };