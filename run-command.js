const spawn = require('child_process').spawnSync

function runCMD (cmd) {
  spawn(cmd, [], {
    stdio: 'inherit',
    shell: true
  })
}

module.exports = runCMD