module.exports = {
  namespace: 'circle',
  state: {
    currentData: 0,
    data: [
      {
        nodes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        links: [[0, 1], [0, 2], [3, 5], [2, 4], [1, 2], [3, 4], [1, 5], [1, 6], [2, 7], [2, 8], [3, 8], [8, 7]],
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
        group: [[0, 0, 0, 1, 1, 1, 2, 2, 2]]
      }
    ],
    options: {
      labels: true,
      width: 600,
      height: 400
    }
  }
}
