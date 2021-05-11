module.exports = {
  presets: ["next/babel"],
  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
    test: {
      plugins: ["dynamic-import-node"],
    },
  },
};
