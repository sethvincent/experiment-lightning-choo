var Graph = require('lightning-graph-bundled')
var html = require('yo-yo')
var xtend = require('xtend')

module.exports = function (state, prev, send) {
  var el = html`<div class="viz-wrapper"></div>`
  var current = state['graph-bundled'].currentData
  // data gets mutated by lightning-graph-bundled
  var data = xtend(state['graph-bundled'].data[current])
  var options = state['graph-bundled'].options
  var graph = new Graph(el, data, null, options)
  return html`<div class="example">
    <h2><a href="https://github.com/lightning-viz/lightning-graph-bundled">graph-bundled</a></h2>
    ${el}
  </div>`
}
