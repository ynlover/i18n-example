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
    }
}
