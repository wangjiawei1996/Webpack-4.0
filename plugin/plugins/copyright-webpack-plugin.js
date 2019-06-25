class CopyRightWebpackPlugin {
  apply(complier) {
    complier.hooks.emit.tapAsync('CopyRightWebpackPlugin ',(compilation, cb) => {
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