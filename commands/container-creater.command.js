const BaseCommand = require('./base.command')

class ContainerCreater extends BaseCommand {
  constructor (name, port) {
    super('docker create')
    this.name = name
    this.port = port
  }

  build () {
    return [this.cmd, ]
  }
}

module.exports = ContainerCreater