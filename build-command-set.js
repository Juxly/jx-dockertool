
const ImageBuilder = require('./commands/image-builder.command')
const ImageDestroyer = require('./commands/image-destroyer.command')
const ContainerCreator = require('./commands/container-creator.command')
const ContainerDestroyer = require('./commands/container-destroyer.command')

function buildCommandSet (path, config) {
  var image = config.image
  var container = config.container

  var containerDestroyer = new ContainerDestroyer(container.name)

  var imageDestroyer = new ImageDestroyer(image.name)

  var imageBuilder = new ImageBuilder(path, image.dockerfile, image.name)
    .addArguments(image.args)
    .addOptions(image.options)

  var containerCreator = (new ContainerCreator(container.name, container.port, image.name))
    .addArguments(container.args)
    .addOptions(container.options)

  return [containerDestroyer.build(), imageDestroyer.build(), imageBuilder.build(), containerCreator.build()]
}

module.exports = buildCommandSet