const BaseCommand = require('./base.command')

class ImageBuilder extends BaseCommand {
  constructor (path, dockerfile, name) {
    super('docker build')
    this.path = path
    this.dockerfile = dockerfile
    this.name = name
  }

  build () {
    return [this.cmd, this.path, this.arguments.join(' '), ('-f ' + this.dockerfile), ('-t ' + this.name), this.options.join(' ')].join(' ')
  }
}

module.exports = ImageBuilder