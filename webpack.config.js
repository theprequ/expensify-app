const path = require("path"); // Load path module (https://nodejs.org/api/path.html#path_path_join_paths)
const ExtractTextPlugin = require("extract-text-webpack-plugin") // S13 L134

// Was changed from exporting an object to returning a function
// ^^ In S13 L133
module.exports = (env) => {
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };
};

// THIS FILE WAS LAST MODIFIED IN SECTION 13 LECTURE 134 <-- old
// THIS FILE WAS LAST MODIFIED IN SECTION 13 LECTURE 137
