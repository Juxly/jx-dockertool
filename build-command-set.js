
const ImageBuilder = require('./commands/image-builder.command')
const ImageDestroyer = require('./commands/image-destroyer.command')
const ContainerCreator = require('./commands/container-creator.command')
const ContainerDestroyer = require('./commands/container-destroyer.command')

function buildCommandSet (path, config) {
  var image = config.image
  var container = config.container
  return {
  destroyContainer: (new ContainerDestroyer(container.name)).build(),
  destroyImage: (new ImageDestroyer(image.name)).build(),
  buildImage: (new ImageBuilder(path, image.dockerfile, image.name)).build(),
  buildConteiner: (new ContainerCreator(image.name, container.port, container.name)).build()
  }
}

module.exports = buildCommandSet