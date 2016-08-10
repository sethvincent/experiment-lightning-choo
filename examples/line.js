var Line = require('lightning-line')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.line.currentData
  var data = state.line.data[current]
  var options = state.line.options
  var line = new Line(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-line">line</a></h2>
    ${el}
  </div>`
}
