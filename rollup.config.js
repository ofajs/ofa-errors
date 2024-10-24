const path = require("path");
const CWD = process.cwd();
const PACKAGE = require(path.join(CWD, "package.json"));
const terser = require("@rollup/plugin-terser");
const json = require("@rollup/plugin-json");

const banner = `//! ${PACKAGE.name} - v${PACKAGE.version} ${
  PACKAGE.homepage
}  (c) ${PACKAGE.startyear}-${new Date().getFullYear()} ${PACKAGE.author.name}`;

module.exports = [
  {
    input: "src/ofa-error-zh.js",
    output: [
      {
        file: "dist/ofa-error-zh.js",
        format: "umd",
        name: "$",
        banner,
      },
    ],
    plugins: [json()],
  },
];
