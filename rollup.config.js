const path = require("path");
const fs = require("fs");
const CWD = process.cwd();
const PACKAGE = require(path.join(CWD, "package.json"));
const terser = require("@rollup/plugin-terser");

const banner = `//! ${PACKAGE.name} - v${PACKAGE.version} ${
  PACKAGE.homepage
}  (c) ${PACKAGE.startyear}-${new Date().getFullYear()} ${PACKAGE.author.name}`;

const finnalOpts = fs
  .readdirSync("src")
  .filter((file) => file.endsWith(".js"))
  .map((file) => {
    return {
      input: path.join("src", file),
      output: [
        {
          dir: "dist/",
          format: "umd",
          name: "$",
          banner,
        },
      ],
      plugins: [terser()],
    };
  });

console.log(finnalOpts);

module.exports = finnalOpts;
