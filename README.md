# Seed project Template with Webpack and Wasm-pack

Start a basic [Seed](https://seed-rs.org/) web application project, using webpack, wasm pack and auto-reload.

### Set-up

The easiest way to use this template is to `degit` it. This will de-git your project, so that you can set up your project without needing to delete this projects .git settings. _(Refer to the [degit package](https://www.npmjs.com/package/degit) for more options and to learn more.)_

_n.b._ __Commad examples below show both `npm` and `yarn` where relevant__

First install [npx](https://www.npmjs.com/package/npx), if not already installed.

`npm install -g npx` 

_OR_ 

`yarn global add npx`

Then de-git this repo into a directory of your choice for your project.

`npx degit fattenap/seed-quickstart [project name] && cd [project name]`

Now, from within the project directory run

`npm install` 

_OR_ 

`yarn install`

### Start Coding

Start the local webserver 

`npm run start:dev` 

_OR_ 

`yarn start:dev`

Then hit [http://localhost:8080/](http://localhost:8080/). Open your IDE of choice and start coding.

Your code will recompile and refresh the browser on save.

### Things you need to know
- To change the output bundle name, update the package.json file, replacing `bundle` and `dev-bundle` with a name you want.
- The index.html file is a template, see `HtmlWebpackPlugin` in webpack.config.js
- The static directory and all the assets, will be copied to the `dist` folder during build.

### Building the project

`npm run build` 

_OR_ 

`yarn build`

This will run a release build. The artifacts will be copied to a `dist` folder, for you to deploy to your server.
