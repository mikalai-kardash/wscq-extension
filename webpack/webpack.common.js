const path = require("path");
const { cwd } = require("process");

function getPath(file) {
  return path.resolve(cwd(), file);
}

const sourceDir = "src";
const distDir = "ext/js";

module.exports = {
  entry: {
    background: getPath(sourceDir + "/background.ts")
  },
  output: {
    path: getPath(distDir),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  }
};
