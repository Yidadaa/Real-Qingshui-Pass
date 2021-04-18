module.exports = {
  devServer: {
    https: true,
    disableHostCheck : true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}