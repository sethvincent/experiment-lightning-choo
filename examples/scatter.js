var Scatter = require('lightning-scatter')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.scatter.currentData
  var data = state.scatter.data[current]
  var options = state.scatter.options
  var scatter = new Scatter(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-scatter">scatter</a></h2>
    ${el}
  </div>`
}
