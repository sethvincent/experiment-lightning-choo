var Force = require('lightning-force')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.force.currentData
  var data = state.force.data[current]
  var options = state.force.options
  var force = new Force(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-force">force</a></h2>
    ${el}
  </div>`
}
