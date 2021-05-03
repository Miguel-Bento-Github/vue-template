module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transformIgnorePatterns: [
    "node_modules/(?!jest-test)" + "node_modules/(?!(jest-test))",
  ],
};
