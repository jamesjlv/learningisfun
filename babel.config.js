module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@domain": "./src/domain",
            "@": "./src",
            "@shared": "./src/shared",
            "@presentation": "./src/presentation",
            "@main": "./src/main",
            "@infra": "./src/infra",
            "@data": "./src/data",
            "@assets": "./src/assets",
            "@constants": "./src/constants",
          },
        },
      ],
      "optional-require",
      "react-native-reanimated/plugin",
      "babel-plugin-styled-components",
    ],
  };
};
