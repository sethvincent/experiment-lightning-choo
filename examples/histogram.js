var Histogram = require('lightning-histogram')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.histogram.currentData
  var data = state.histogram.data[current]
  var options = state.histogram.options
  var histogram = new Histogram(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-histogram">histogram</a></h2>
    ${el}
  </div>`
}
