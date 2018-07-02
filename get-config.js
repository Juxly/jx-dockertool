const _ = require('lodash')
const fs = require('fs')

function getConfig (path, profile) {
  if (!fs.existsSync(path)) throw `Project not found: ${path} is an invalid directory`
  if (!fs.existsSync(path + '/dockertool-config.json')) throw `Config file not found: "dockertool-config.json" was not in project root`
  var config = _.find(require(path + '/dockertool-config'), {profileName: profile})
  if (typeof config === 'undefined') throw `Profile not found: No profile named "${profile}" found in config file`
  return config
}

module.exports = getConfig