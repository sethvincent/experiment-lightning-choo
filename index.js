var choo = require('choo')
var html = require('yo-yo')

var app = choo()

function layout (child) {
  return function (state, prev, send) {
    return html`<div class="app">
      <h1>using lightning with yo-yo & choo</h1> 
      <p><a href="/">examples</a></p>
      ${child(state, prev, send)}
    </div>`
  }
}

app.model(require('./models/adjacency'))
app.model(require('./models/circle'))
app.model(require('./models/force'))
app.model(require('./models/graph-bundled'))
app.model(require('./models/histogram'))
app.model(require('./models/line'))
app.model(require('./models/map'))
app.model(require('./models/matrix'))
app.model(require('./models/scatter'))

app.router(function (route) {
  return [
    route('/', layout(function () {
      return html`<ul>
      <li><a href="/adjacency">adjacency</a></li>
      <li><a href="/circle">circle</a></li>
      <li><a href="/force">force</a></li>
      <li><a href="/graph-bundled">graph-bundled</a></li>
      <li><a href="/histogram">histogram</a></li>
      <li><a href="/line">line</a></li>
      <li><a href="/map">map</a></li>
      <li><a href="/matrix">matrix</a></li>
      <li><a href="/scatter">scatter</a></li>
      </ul>`
    })),
    route('/adjacency', layout(require('./examples/adjacency'))),
    route('/circle', layout(require('./examples/circle'))),
    route('/force', layout(require('./examples/force'))),
    route('/graph-bundled', layout(require('./examples/graph-bundled'))),
    route('/histogram', layout(require('./examples/histogram'))),
    route('/line', layout(require('./examples/line'))),
    route('/map', layout(require('./examples/map'))),
    route('/matrix', layout(require('./examples/matrix'))),
    route('/scatter', layout(require('./examples/scatter')))
  ]
})

var tree = app.start()
document.body.appendChild(tree)
