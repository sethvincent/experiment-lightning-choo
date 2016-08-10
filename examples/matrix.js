var Matrix = require('lightning-matrix')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.matrix.currentData
  var data = state.matrix.data[current]
  var options = state.matrix.options
  var matrix = new Matrix(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-matrix">matrix</a></h2>
    ${el}
  </div>`
}
