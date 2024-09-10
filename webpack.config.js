const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your application
  output: {
    filename: "bundle.js", // Output filename
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply rule for .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Use Babel for transpiling JavaScript
        },
      },
      {
        test: /\.css$/, // Apply rule for .css files
        use: ["style-loader", "css-loader"], // Loaders for CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Apply rule for image files
        type: "asset/resource",
      },
    ],
  },
  mode: "development", // Set the mode to development
};
