const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "src/images");
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
