module.exports = {
    entry: "./public/client.js",
    output: {
        path: __dirname + "/public",
        filename: "file.js"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style!css!less"}
        ]
    }
};