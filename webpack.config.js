module.exports = {
    context: __dirname,
    entry: {
        'example':'./src/scripts/index.js'
    },

    output: {
        path: './lib',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'babel',
        //         exclude: /node_modules/,
        //         query:{
        //             presets: ["env"]
        //         }
        //     }
        // ]
    }
}
