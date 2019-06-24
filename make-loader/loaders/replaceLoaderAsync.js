const loaderUtils = require('loader-utils');
module.exports = function(source) {
  if (Node全局变量 === '中文') {
    source.replace('{{title}}','中文标题')
  } else {
    source.replace('{{title}}', '中文标题') 
  }
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace('Jia', options.name)
    callback(null,  result)
  }, 1000)
}