var Map = require('lightning-map')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.map.currentData
  var data = state.map.data[current]
  var options = state.map.options
  var map = new Map(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-map">map</a></h2>
    ${el}
  </div>`
}
