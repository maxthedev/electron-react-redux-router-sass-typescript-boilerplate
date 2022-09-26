# Electron app with React + React Router + React Redux + SASS + Typescript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Then Electron was added to the project

##### Table of Contents
- [Installation](#Installation)
- [Project architecture](#Project-architecture)
- [Typescripts config](#Typescripts-config)
- [Polyfill error ?](#polyfill-error-)
- [Scripts](#Scripts)
- [React Scripts](#React-Scripts)


# Installation 

Run `yarn install`

# Project architecture

All folders and files excepted the "electron" folder in src are for the react app.

# Typescripts config

- `tsconfig.json` : Typescript config for the react app
- `tsconfig-electron.json` : Typescript config for the electron part only


# Polyfill error ?

For react-scripts v5.0.1

First make changes in the `node_modules/react-scripts/config/webpack.config.js` file :

In this file find the `module.exports = function (webpackEnv)` function, in the returned object of this function find `resolve` and add as children key `fallback`. In the `fallback` object your package polyfill as follows :

Example with the `path` and `fs` package
```javascript
resolve: {
    fallback:{
        "path":false,
        "fs":false
    },
    // Rest of the config
```

Then run the script `yarn patch`

Then after any update or dependencies installation run the script `yarn postinstall:patch`

# Scripts

Big picture : To develop use the `start` script, to produce the app package use the `ship` script

- `clean` : Remove the /app & /build folder
- `build` : Build the typescript of electron only (./build/electron)
- `watch` : Typescript auto build for electron only (./build/electron)
- `start` : Run the electron app with react in dev mode (live reload for react). You may need to restart this script
- `pre-ship:dev` : Run the electron app with the build of the react app (static files)
- `ship` : Build the app
- `patch` : Create a patch for a node_modules lib
- `postinstall:patch` : Apply the patch after any dependencies update
- `start:electron:dev` : Run electron only (in development mode)
- `start:electron:prod` : Run electron only (in production mode)

# React Scripts

In the project directory, you can run:

### `yarn start:react`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test:react`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build:react`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject:react`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
