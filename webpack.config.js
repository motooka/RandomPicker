const path = require('path');

module.exports = {
    entry: './compiled/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 20080,
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js'
        }
    }
};
