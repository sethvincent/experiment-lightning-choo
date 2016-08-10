var Circle = require('lightning-circle')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.circle.currentData
  var data = state.circle.data[current]
  var options = state.circle.options
  var circle = new Circle(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-circle">circle</a></h2>
    ${el}
  </div>`
}
