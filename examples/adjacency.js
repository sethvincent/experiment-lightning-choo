var Adjacency = require('lightning-adjacency')
var html = require('yo-yo')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state.adjacency.currentData
  var data = state.adjacency.data[current]
  var options = state.adjacency.options
  var adjacency = new Adjacency(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-adjacency">adjacency</a></h2>
    ${el}
  </div>`
}
