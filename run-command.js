const spawn = require('child_process').spawnSync

function runCMD (path ,cmd) {
  spawn(`cd ${path} && ${cmd}`, [], {
    stdio: 'inherit',
    shell: true
  })
}

module.exports = runCMD