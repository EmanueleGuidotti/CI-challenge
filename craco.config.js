const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  style: {
    modules: {
      localIdentName: "",
    },
    css: {
      loaderOptions: {
        /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */
      },
    },
    sass: {
      loaderOptions: {
        /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
      },
    },
  },
  eslint: {
    enable: true /* (default value) */,
    mode: ESLINT_MODES.extends,
    configure: () => {
      // Workaround for broken ESLINT_MODES.file mode
      return require("./eslintrc.js");
    },
    pluginOptions: {
      /* Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options. */
    },
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value)  */,
  },
  webpack: {
    alias: {},
    plugins: {
      add: [] /* An array of plugins */,
      remove:
        [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    configure: {
      /* Any Jest configuration options: https://jestjs.io/docs/en/configuration */
    },
  },
  devServer: {
    /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver */
  },
};
