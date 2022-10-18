const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/marketplace/blocks",
    createProxyMiddleware({
      target: "https://api.up42.com",
    })
  );
};
