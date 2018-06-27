
class BaseCommand {
  constructor(cmd) {
    this.cmd = cmd
    this.arguments = []
    this.options = []
  }

  addArgument (argument) {
    this.arguments.push(argument)
    return this
  }

  addOption (option) {
    this.options.push(option)
    return this
  }

  build () {
    return [this.cmd, this.arguments.join(' '), this.options.join(' ')].join(' ')
  }
}

module.exports = BaseCommand