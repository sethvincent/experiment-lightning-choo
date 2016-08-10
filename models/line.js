module.exports = {
  namespace: 'line',
  state: {
    currentData: 0,
    data: [
      {
        series: [[1, 3, 5, 2, 4, 5, 7, 9], [2, 1, 9, 0, 0, 1.3, 1], [8.6, 3, 4.7, 7, 5, 6.6]],
        index: [10, 11, 12, 13, 14, 15, 16, 17],
        thickness: [5, 10, 20],
        xaxis: 'example x-axis label',
        yaxis: 'example y-axis label'
      }
    ],
    options: {
      zoom: true,
      width: 600,
      height: 400
    }
  }
}
