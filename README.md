# Seed project Template with Webpack and Wasm-pack [Unofficial]

#### _Warning!! (CSS processing in this Rust wasm project is experimental - use at own risk)_

Start a basic [Seed](https://seed-rs.org/) web application project, using webpack, wasm pack, tailwindcss and auto-reload.

### Set-up project

Either press the `Use this template` button above and then clone it or clone this repo directly. 

Once cloned, enter the project root directory, install the packages and start the local webserver. 

```
npm install
npm run start:dev
```

Hit [http://localhost:8080/](http://localhost:8080/). Open your IDE of choice and start coding. Your code will recompile and refresh the browser on save.

### Working with Styles

When working with css and styling you should run watch:styles as a separate process.

```
npm run watch:styles
```

Whenever changes are saved to files within the `styles` directory, a process will run that updates the styles, which are then reflected in the browser. Ensure you are running the dev server to see the changes. (`npm run start:dev` )

Please review [tailwindcss](https://tailwindcss.com/) and [postcss](https://postcss.org/) to see how to configure and update css proceessing, styles and themes.

### Building the project

```
npm run build
```

The build process will scan your source files for references to tailwind class names. It uses this information to minify the css output file, only including the required classes in the dist `styles.css` file. Apart from the css directory, all the other artifacts located in the static directory will be copied to the `dist` folder, ready for you to deploy to your server.

### Things you need to know
- To change the output bundle name, update the package.json file, replacing `bundle` and `dev-bundle` with a name you want.
- The index.html file is a template, see `HtmlWebpackPlugin` in webpack.config.js
- The static directory and all the assets, will be copied to the `dist` folder during build.
- `npm run process:styles` will generate `styles.css` and place it in the `static/css` directory. Currently, all other css files need to be imported into `styles/styles.css`. `npm run watch:styles` does the same thing, but also watches for changes and will re-run `process:styles`.
- _VS Code tip_: To remove the css linting errors install the [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) support extension.
