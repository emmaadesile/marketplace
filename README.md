# Marketplace app

Marketplace is a simple app the fetches product from a third party api, and users can purchase them the products with credits.

The app is hosted on on here [here](https://markeyplace.netlify.com)

## Technologies used

- [React](https://reactjs.org/) - Frontend UI library
- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language built on Javascript
- [Material UI](https://mui.com/material-ui) - A collection of UI tools to helps new features faster
- [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query) - A data fetching and caching tool. It is an addon to Redux toolkit (state management library)
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) - Node.js proxy middle. This solves the CORS error from the api

## Testing

**Unit tests**
Most of the components were tested separately to ensure that they work as expected. The tested components are

- Product Card
- Cart

**Integration tests**

- In order to prevent accidental leaks between tests, a separate Redux store instance is created for every test, rather than reusing the same store instance and resetting the state.
- I use `msw` to intercept network request during the test and return a mock response after 150ms

## Install

You need node version `>=16.0.0` to run the app

`npm install`
Install all dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
