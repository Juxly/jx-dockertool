const _ = require('lodash')
const runCMD = require('./run-command')

function runCommandSet (path, commandSet) {
  _.forEach(commandSet, cmd => {
    runCMD(path, cmd)
  })
}

module.exports = runCommandSet