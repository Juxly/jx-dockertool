const BaseCommand = require('./base.command')

class ImageBuilder extends BaseCommand {
  constructor (path, dockerfile, name) {
    super('docker build')
    this.path = path
    this.dockerfile = dockerfile
    this.name = name
  }

  formatDockerfile() {
    return `-f ${this.dockerfile}`
  }

  formatName() {
    return `-t ${this.name}`
  }

  build () {
    return [this.cmd, this.path, this.options.join(' '), this.formatDockerfile(), this.formatName(), this.arguments.join(' ')].join(' ')
  }
}

module.exports = ImageBuilder