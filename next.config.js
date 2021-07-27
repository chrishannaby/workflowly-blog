const path = require("path");

module.exports = {
  target: "serverless",
  basePath: "/blog",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};
