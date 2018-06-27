const spawn = require('child_process').spawnSync

function runCMD (cmd) {
  spawn(cmd, [], {
    stdio:'inherit'
  })
}

module.exports = runCMD