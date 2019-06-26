class CopyRightWebpackPlugin {
  apply(complier) {
    complier.hooks.compile.tap('CopyRightWebpackPlugin', (compilation) => {
      console.log('compiler')
    })
    complier.hooks.emit.tapAsync('CopyRightWebpackPlugin ',(compilation, cb) => {
      debugger;
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by jiawei'
        },
        size: function() {
          return 21;
        }
      }
      cb();
    })
  }
}
module.exports = CopyRightWebpackPlugin;