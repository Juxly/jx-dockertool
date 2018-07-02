const BaseCommand = require('./base.command')

class ContainerDestroyer extends BaseCommand {
  constructor (containerName) {
    super('docker conteiner rm')
    this.containerName = containerName
    this.options.push('-f')
  }

  formatContainerFinder () {
    return `$(docker ps -a -f name=${this.containerName} -q)`
  }

  build () {
    return [this.cmd, this.options.join(' '), this.formatContainerFinder()].join(' ')
  }
}

module.exports = ContainerDestroyer