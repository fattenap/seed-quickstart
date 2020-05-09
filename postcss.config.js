// N.B. Plugin order is important
let plugins = [
  require("postcss-import"),
  require("tailwindcss")({ config: "styles/tailwind.config.js" }),
];
if (process.env.NODE_ENV === "production") {
  plugins = plugins.concat([require("postcss-preset-env"), require("cssnano")]);
}
module.exports = {
  plugins: [...plugins],
};