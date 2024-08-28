// webpack.config.js
const path = require("path");


module.exports = {
  mode: "development",
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    
  ],
  module: {
    rules: [
      
    ],
  },
};
