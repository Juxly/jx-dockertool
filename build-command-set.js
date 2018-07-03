const ImageBuilder = require('./commands/image-builder.command')
const ImageDestroyer = require('./commands/image-destroyer.command')
const ContainerCreator = require('./commands/container-creator.command')
const ContainerDestroyer = require('./commands/container-destroyer.command')

function buildCommandSet (path, profile, program) {
  var image = profile.image
  var container = profile.container
  var commandSet = []

  // add container destroyer to command set if rebuilding and a container exists in the profile
  if (program.rebuild &&  (typeof container !== 'undefined')) {
    var containerDestroyer = new ContainerDestroyer(container.name)
    commandSet.push(containerDestroyer.build())
  }

  // add image destroyer to command set if rebuilding and an image exists in the profile
  if (program.rebuild &&  (typeof image !== 'undefined')) {
    var imageDestroyer = new ImageDestroyer(image.name)
    commandSet.push(imageDestroyer.build())
  }

  // add image builder to command set if an image exists in the profile
  if (typeof image !== 'undefined') {
    var imageBuilder = new ImageBuilder(path, image.dockerfile, image.name)
      .addArguments(image.args)
      .addOptions(image.options)
    commandSet.push(imageBuilder.build())
  }

  // add container creator to command set if a container exists in the profile
  if (typeof container !== 'undefined') {
  var containerCreator = (new ContainerCreator(container.name, container.port, image.name))
    .addArguments(container.args)
    .addOptions(container.options)
  commandSet.push(containerCreator.build())
  }

  return commandSet
}

module.exports = buildCommandSet