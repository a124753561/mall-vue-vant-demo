const Mock = require('mockjs')

Mock.setup({
  timeout: '200-600'
})

let configArray = []

const files = require.context('./mock', true, /\.js$/)
files.keys().forEach(key => {
  if (key === 'index.js') {
    return
  }
  configArray = configArray.concat(files(key).default)
})

configArray.forEach(item => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split('|')
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
  }
})
