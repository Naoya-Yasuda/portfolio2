module.exports = {
    transpileDependencies: [
        // 例: 'some-dependency', 'another-dependency'
    ],
    publicPath: process.env.NODE_ENV === 'production'
        ? '/portfolio2/'
        : '/'
}
