#!/usr/bin/env node
const runCMD = require('../run-command')
const getConfig = require('../get-config')
const buildCommandSet = require('../build-command-set')

var program = require('commander')

program
  .version('v0.1.0')
  .arguments('<ProjectPath> [BuildProfileName]')
  .action((path, profile) => {
    main(path, profile)
  })
  //.option('-R, --no-rebuild', ' do not remove existing containers before building, just builds containers')

function main(path, profile) {
  console.log(`path: ${path}`)
  console.log(`profile: ${profile}`)

  try {
    var config = getConfig(path, profile)
  }
  catch (err) {
    console.error(err)
    return
  }
  console.log('config:\n', config)
  
  console.log('commands:\n', buildCommandSet(path, config))
}

program.parse(process.argv)