# Marketplace app

Marketplace is a simple app the fetches products from a third party api, and users can purchase the products with their available credits.

The app is hosted on on here [here](https://up42-marketplace.netlify.app)

## Technologies used

- [React](https://reactjs.org/) - Frontend UI library
- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language built on Javascript
- [Material UI](https://mui.com/material-ui) - A collection of UI tools to helps new features faster
- [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query) - A data fetching and caching tool. It is an addon to Redux toolkit (state management library)
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) - Node.js proxy middle. This solves the CORS error from the api

### Folder structure

**Colocation**: I included everything (styles, component, test, props) related to each component/view in the same folder.

## App development steps

**Building the UI**

I built out the static UI to give me an idea of what the actual implementation would look like after integrating the data from the api.

The top navigation has a fixed position for easy access when the user scrolls on the page. It houses the logo, available credits and the cart icon.

The cart, which is hidden by default, can be opened when a user clicks on the cart icon in the navbar. This ensures the screen is not crowded.

**Data fetching and Client state**

I use RTK Query which is an optional addon included in Redux Toolkit package. This helps us to handle client-side and server state easily. With RTK Query, I can use the loading states to show the skeleton loader, avoid duplicate requests for the same data, etc. I used `transformResponse` function provided by RTK Query to filter the data returned from the server.
Redux Toolkit gives us a global store that can be used to serve data to any component/view that needs it.

**Loading state**

For the loading state, I implemented a skeleton loader which gives you an idea of what the data would look like when fetched data is available.

**Proxy endpoint**
The API throws a CORS error while testing on local, so I used `http-proxy-middleware` library to fix that.

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/marketplace/blocks",
    createProxyMiddleware({
      target: "https://api.up42.com",
    })
  );
};
```
- context (/marketplace/blocks): request to be proxied to target host
- target: target host to proxy to. (protocol + host)

**Data flow**

The app uses top-down data flow ie parent component passes data to child components. This is a widely used approach in single page applications and React follows the same pattern.
I made sure the components are dumb, ie they only render the data that are passed to them.

The products view screen uses the `useGetProductsQuery` to fetch all the data.

**Error handling**

I ensured that the error was properly handled. An error message is displayed if an error occurs during data fetching.

## Testing

**Unit tests**
Most of the components were tested separately to ensure that they work as expected. The tested components are

- Product Card
- Cart
- Navigation

**Integration tests**

- In order to prevent accidental leaks between tests, a separate Redux store instance is created for every test, rather than reusing the same store instance and resetting the state.
- I use `msw` to intercept network requests during the test and return a mock response after 150ms

## Notes on improvement

One improvement I could have added if I had more time is this; adding a product to the cart multiple times, shouldn't append the item to cart but update the quantity of that item in the cart. From the cart, you should also be able to increase or decrease the item quantity.

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

## Contributors

[Emmanuel Adesile](https://github.com/emmaadesile)
