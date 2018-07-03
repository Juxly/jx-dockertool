const _ = require('lodash')

function getProfile(config, name) {
  var profile = _.find(config, {profileName: name})
  if (typeof profile === 'undefined') throw `Profile not found: No profile named "${name}" found in config file`
  return profile
}

module.exports = getProfile