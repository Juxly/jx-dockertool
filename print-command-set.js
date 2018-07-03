const _ = require('lodash')

function printCommandSet (commandSet) {
  console.log('Commands:')
  _.forEach(commandSet, cmd => {
    console.log('  ' + cmd)
  })
}

module.exports = printCommandSet