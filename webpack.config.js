const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const distPath = path.resolve(__dirname, "dist");
const webpack = require('webpack');

module.exports = (env, argv) => {
  const { bundle } = env;
  return {
    devServer: {
      contentBase: distPath,
      compress: argv.mode === "production",
      port: 8080,
    },
    entry: "./index.js",
    output: {
      path: distPath,
      filename: `${bundle}.js`,
      webassemblyModuleFilename: `${bundle}.wasm`,
    },
    resolve: {
      alias: {
        wasm_mod: path.resolve(__dirname, 'pkg/index.js'),
      }
    },
    plugins: [
      // remove webpack err -> critical: 'the request of a dependency is an expression'
      new webpack.ContextReplacementPlugin(
        /\/pkg$/,
        (data) => {
          delete data.dependencies[0].critical;
          return data;
        },
      ),
      new CopyWebpackPlugin(
        [
          {
            from: "static",
          },
        ],
        { ignore: argv.mode !== "production" ? "" : "static/css/**/*.css" }
      ),
      new WasmPackPlugin({
        crateDirectory: __dirname,
        args: "--log-level warn",
      }),
      new HtmlWebpackPlugin({
        title: "Seed App",
        template: "static/index.html",
        scriptLoading: "defer",
        inject: "body",
        meta: {
          viewport: "width=device-width, initial-scale=1.0, user-scalable=1",
        },
        favicon: "static/favicon.ico",
      }),
    ]
  };
};
