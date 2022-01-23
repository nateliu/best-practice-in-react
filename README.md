# Best Practice In React Monorepo

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

This is a [lerna](https://github.com/lerna/lerna) monorepo. It demonstrates the conveniences of housing dependent packages together. Lerna allows you to manage and publish packages from a single repo.


## Important notes/caveats about this lerna monorepo

### devDependencies
A common monorepo practice is to [hoist devDependencies](https://github.com/lerna/lerna#common-devdependencies). This means that for all leaf packages in the monorepo, `devDependencies` are declared in the root package.json and provided by the root `node_modules` folder, instead of each leaf package relying on its own `node_modules` folder. 
* `devDependencies` are only declared in a leaf package's `package.json` if:
  - the dependency provides a "binary" executable that are used by npm scripts (ie. test runners, code coverage runners, etc).
  - the dependency is not common to more than 1 package in the monorepo

Hoisting common `devDependencies` has several benefits:
* reduces bootstrap time since devDependencies are only downloaded one time instead of for each package
* forces packages in the monorepo to use the same version of devDependencies which should provide more consistent test results

### Bootstrapping
Any `lerna bootstrap` execution in the monorepo will include the hoist option via `lerna.json` at the root of the repo. This means `yarn bootstrap` and `lerna bootstrap` will apply hoisting.

### package-lock.json

A package-lock.json file is being employed at the root to ensure a consistent set of root `node_modules`. package-lock.json files should not be used at the leaf package level. If you are running into a strange issue during dev or during runtime in the monorepo consider rebootstrapping or resetting the `node_modules` installed by doing one of the following:

At the monorepo root:
* `yarn bootstrap` - to re-bootstrap each package and root node_modules folder
* `yarn clean` - removes the root `node_modules` folder as well as runs `lerna clean` to remove every `node_modules` folder in each leaf package in the monorepo

## Development

### Prerequisites
1. This repo is configured to publish all npm packages to [verdaccio](https://www.npmjs.com/package/verdaccio). 

2. Using `lerna`. As mentioned this a `lerna` monorepo. You have 2 options for using `lerna`:

    * (suggested) `lerna` is a `devDependency` for this project which means at the root you can use `lerna run` to run lerna commands, which will run the `lerna` binary in the root `node_modules/.bin` directory of this repository.

    * You can install lerna globally: `yarn globall add lerna`. Then `lerna` will be available on your CLI without `yarn`.

3. Bootstrap the entire repo: `yarn install` to install root dependencies and bootstrap all packages in the monorepo.
   
### Creating a component

Use [create-react-app](https://create-react-app.dev/).

This tool quickly generates the base file structure for you to build your custom component from.


### Tests

If you wish to run tests for all packages in the monorepo:

* from the monorepo root: `yarn test`
* from any where in the monorepo: `lerna run test --stream`

If you wish to run all tests with a code coverage report:

* from the monorepo root: `yarn run cover`

If you wish to run an individual package's tests:

* from any where in the monorepo: `lerna run test --scope <package name> --stream`
* from a package's root directory: `yarn test`
