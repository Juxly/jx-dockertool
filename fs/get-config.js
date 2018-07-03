const fs = require('fs')

function getConfig (path) {
  if (!fs.existsSync(path)) throw `Project not found: ${path} is an invalid directory`
  if (!fs.existsSync(path + '/dockertool-config.json')) throw `Config file not found: "dockertool-config.json" was not in project root`
  return require(path + '/dockertool-config')
  
}

module.exports = getConfig