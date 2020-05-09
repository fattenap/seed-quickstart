const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const distPath = path.resolve(__dirname, "dist");

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
    plugins: [
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
        extraArgs: "--no-typescript",
        watchDirectories: [path.resolve(__dirname, "static")],
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
    ],
    watch: argv.mode !== "production",
  };
};
