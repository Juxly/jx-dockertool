#!/usr/bin/env node
const getConfig = require('../fs/get-config')
const getProfile = require('../fs/get-profile')
const buildCommandSet = require('../build-command-set')
const printCommandSet = require('../print-Command-set')
const runCommandSet = require('../run-command-set')

var program = require('commander')

program
  .version('v0.1.0')
  .arguments('<ProjectPath> [BuildProfileName]')
  .action((path, profileName) => {
    main(path, profileName)
  })
  .option('-R, --no-rebuild', ' do not remove existing containers before building, just builds containers')
  .option('-e, --execute', 'automaticall execute the commands built in a sub-process (check them before running this option)')

function main(path, profileName) {
  // Load config file from path and get config profile, if none found, end program
  console.log(`Loading dockertool-config.json from project at ${path}...`)
  try {
    var config = getConfig(path)
    var profile = getProfile(config, profileName)
  }
  catch (err) {
    console.error(err)
    return
  }
  console.log(`Loaded profile "${profile.profileName}" from ${path}`)
  
  // Build commands and print them to screen
  console.log(`\nBuilding commands...`)
  var commandSet = buildCommandSet(path, profile, program)
  console.log('Commands built')
  printCommandSet(commandSet)

  // Execute commands if (-e, --execute) option is set
  if (program.execute) {
    console.log('Executing commands...')
    runCommandSet(path, commandSet)
    console.log('Done!')
  }
}

program.parse(process.argv)