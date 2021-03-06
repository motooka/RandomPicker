const path = require('path');

module.exports = {
    entry: './compiled/app.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 20080,
        inline: false
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js'
        }
    }
};
