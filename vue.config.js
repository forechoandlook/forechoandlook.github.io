const path = require("path")

module.exports = {
    devServer: {
        port: 8888,
    },
    lintOnSave: false,
    outputDir: path.resolve(__dirname, "./doc")
}
