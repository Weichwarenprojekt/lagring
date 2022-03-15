const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: "development",
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'lagring.js',
        path: path.resolve(__dirname, 'dist'),
        library: "lagring"
    },
};