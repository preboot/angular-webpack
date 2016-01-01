# ng2-webpack
A simple starter for Angular 2 using webpack

Inspired by [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) & [Angular 1 Webpack demo](https://github.com/angular-tips/webpack-demo). 


This seed repo serves as an Angular 2 starter for anyone looking to get up and running with Angular 2 and TypeScript fast. Using a [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for [Angular 2](https://angular.io/).
* Ready to go build system using [Webpack](https://webpack.github.io/docs/) for working with [TypeScript](http://www.typescriptlang.org/).
* Easily add new components using [Angular 2 cli](https://github.com/angular/angular-cli).
* Testing Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* Coverage with [Istanbul](https://github.com/gotwarlost/istanbul)
* End-to-end Angular 2 code using [Protractor](https://angular.github.io/protractor/).
* Stylesheets with [SASS](http://sass-lang.com/).
* Error reported with [TSLint](http://palantir.github.io/tslint/).
* Documentation with [TypeDoc](http://typedoc.io/).


```coffeescript
Warning: Make sure you're using the latest version of Node.js and NPM
```
[Is Angular 2 Ready Yet?](http://splintercode.github.io/is-angular-2-ready/)

### Quick start
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
git clone https://github.com/ocombe/ng2-webpack.git

# change directory to our repo
cd ng2-webpack

# install the repo with npm
npm install

# start the server
npm start
```
go to [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Add new components with Angular 2 cli](#add-new-components-with-angular-2-cli)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app
After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

## Add new components with Angular 2 cli
* `npm install -g angular-cli` to install Angular 2 cli
* Add a new component with: `ng generate component my-new-component`
* Add a new service with: `ng generate service my-new-service`
* Add a new pipe with: `ng generate pipe my-new-pipe`


## Other commands

### build files
```bash
npm run build
```

### build files and watch
```bash
npm run watch
```

### run tests
```bash
npm test
```

### run webdriver (for end-to-end)
```bash
npm run webdriver-start
```

### run end-to-end tests
```bash
# make sure you have webdriver running and a server for the client app (using `npm start` before running the e2e tests for example)
npm run e2e
```

### generate documentation
```bash
npm run docs
```

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 11+](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

# Support, Questions, or Feedback
> Contact us anytime for anything about this repo or Angular 2

* [Chat: AngularClass.slack](http://angularclass.com/member-join/)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)
* [Gitter: AngularClass/angular2-webpack-starter](https://gitter.im/angularclass/angular2-webpack-starter)


# Other Seed/Starter/Example Repos
* [angular2-webpack-starter (AngularClass)](https://github.com/angularclass/angular2-webpack-starter)
  * Client/Server, Webpack, TypeScript, TSD, Protractor, Karma, Jasmine
* [ng2-play (Pawel Kozlowski)](https://github.com/pkozlowski-opensource/ng2-play)
  * Client only, Minimalist, SystemJS, Gulp, TypeScript
* [angular2-seed (Minko Gechev)](https://github.com/mgechev/angular2-seed)
  * Client only, SystemJS, Gulp, TypeScript, TSD, Versioned, Env Dev/Prod
* [ng2-lab (Roland Groza)](https://github.com/rolandjitsu/ng2-lab)
  * Client only, ES6, TypeScript, Firebase, Gulp, Ci, TSD, TSLint
* [ng2-jspm-seed (Rob Wormald)](https://github.com/robwormald/ng2-jspm-seed)
  * Client only, TypeScript, TSD, Gulp, JSPM, Minimalist
* [babel-angular2-app (Shuhei Kagawa)](https://github.com/shuhei/babel-angular2-app)
  * Client only, Minimalist, Babel, ES6+, browserify

# License
 [MIT](/LICENSE)
