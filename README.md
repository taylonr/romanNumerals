[![Dependency Status](https://gemnasium.com/bmcallis/library-skeleton.svg)](https://gemnasium.com/bmcallis/library-skeleton)

# Library Skeleton

This skeleton repo is a starter for creating an npm module to be used as a library in your main app.

## Technologies

* [webpack](https://webpack.github.io/) for bundling
* [babel](https://babeljs.io/) to support writting the library in ES2015
* [mocha](https://mochajs.org/) as a test runner with [chai](http://chaijs.com/) for assertions
* [eslint](http://eslint.org/) for linting

## Getting Started

1. Clone the repo
1. Delete the .git directory and then run `git init` to start tracking your history
1. Update package.json with your info (project name, urls, author info, license, keywords, basically everything)

## Workflow

There are many different npm scripts in the package.json to support various workflows. Here are the highlights, but you can run `npm run` to list them all.

* `npm run dev` will watch files for changes then build and test them
* `npm test` will run all unit tests in the `./test` directory and it's subdirectories
* `npm run lint` will lint all source and test files. Note that linting also happens during the build
* `npm run verify` will lint the files, then run the tests. Useful for CI
* `npm run build` will bundle the library as both minified and unminified and with sourcemaps.
* `npm run demo` will use webpack-dev-server to serve up a demo app that is using the library. Changes to library or demo app will cause a reload of the page.

To use the demo page from the browser serve up the this directory with something like [http-server](https://www.npmjs.com/package/http-server) or python and pull up navigate to `demo/index.html`

## Resources

The building blocks for this skeleton came from this article by Krasimir Tsonev: http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6.

This talk by Kate Hudson greatly influenced how npm scripts are being used: https://youtu.be/0RYETb9YVrk.
