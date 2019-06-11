import _ from 'lodash'
var element = document.createElement('div')
element.innerHTML = _.join(['Jia', 'Wei'],'-');
document.body.appendChild(element)
// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default:_ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return element
//   })
// }
// getComponent().then(element => {
//   document.body.appendChild(element)
// })