const BaseCommand = require('./base.command')

class ContainerDestroyer extends BaseCommand {
  constructor (imageName) {
    super('docker image rm')
    this.imageName = imageName
  }

  formatImageFinder () {
    return `$(docker image ls name=${this.imageName} -q)`
  }

  build () {
    return [this.cmd, this.options.join(' '), this.formatImageFinder()].join(' ')
  }
}

module.exports = ContainerDestroyer