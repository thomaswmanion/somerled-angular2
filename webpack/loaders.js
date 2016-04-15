module.exports = [{
    test: /\.tsx?$/,
    loader: 'ts',
    exclude: [
        //node_modules\/(?!(ng2-.+))/
    ]
}, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&minetype=application/font-woff'
}, {
    test: /\.(ttf|eot|svg|jpeg|jpg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
}, {
    test: /\.mp4$/,
    loader: 'file-loader'
}, {
    test: /\.less$/,
    loader: 'style!css!less'
}, {
    test: /\.css$/,
    loader: 'style!css'
}, {
    test: /\.html$/,
    loader: 'raw-loader'
}, {
    test: /\.json$/,
    loader: 'json-loader'
}, {
    test: /\.js$/,
    loader: 'imports?define=>false'
}, {
    test: /masonry-layout/,
    loader: 'imports?define=>false&this=>window'
}];