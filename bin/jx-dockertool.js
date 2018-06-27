#!/usr/bin/env node
// const runCMD = require('../run-command')
const ImageBuilder = require('../commands/image-builder.command')

var cmd = new ImageBuilder('.', 'docker/dev-node.dockerfile', 'ibh-app')

console.log(cmd.build())
