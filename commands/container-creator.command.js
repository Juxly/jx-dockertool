const BaseCommand = require('./base.command')

class ContainerCreator extends BaseCommand {
  constructor (name, port, imageName) {
    super('docker create')
    this.name = name
    this.port = port
    this.imageName = imageName
  }

  formatName () {
    return `--name ${this.name}`
  }

  formatPort () {
    return `-p ${this.port.toString()}:${this.port.toString()}`
  }

  build () {
    return [this.cmd, this.formatName(), this.formatPort(), this.options.join(' '), this.imageName, this.arguments.join(' ')].join(' ')
  }
}

module.exports = ContainerCreator