const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  // Add the Webpack alias configuration for react-native-web
  addWebpackAlias({
    "react-native$": "react-native-web",
  })
);
  