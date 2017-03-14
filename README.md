# Angular 2+ seed project

A basic build of the ChartIQ library within the Angular 2.0 framework. This provides an example of how to implement the most common elements in the charting library. This is not a comprehensive example, more like a good starting point for an Angular developer.

## Requirements

- A copy of the ChartIQ library. To get your copy, visit https://www.chartiq.com/products/html5-charting-library/ to see a demo and get in touch with us.
- [node.js](https://nodejs.org/) installed version 5+
- NPM installed (version 3+) or [Yarn](https://yarnpkg.com/en/)


## Getting started

- Clone this repository.
- Create two symlinks to the ChartIQ library js and css folders within the directory "src/chartiq_library". The new file structure addition should be "src/chartiq_library/js" and "src/chartiq_library/css".
- Run `npm install` to install dependencies. There shouldn't be any need for installing node modules globally.
- Run `npm start` to fire up the dev server.
- Open your browser to [`http://localhost:3000`](http://localhost:3000).
- If you want to use another port, open `package.json` file, then change the `server` script from `--port 3000` to the desired port number. A full list of webpack-dev-server command line options can be found [here](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli).

## Questions and support

If you have questions or get stuck using this project or the ChartIQ library, the dev support team can be reached through [dev@chartiq.com](mailto:dev@chartiq.com).

## Contributing to this project

If you wish to contribute to this project, fork it and send us a pull request.
We'd love to see what it is you want to do with our charting tools!
