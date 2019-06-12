import sketch from 'sketch'
const Slice = sketch.Slice
const Rectangle = sketch.Rectangle

export default function(context) {
  const document = sketch.getSelectedDocument()
  const allLayers = document.selectedLayers
  const layers = allLayers.layers
  
  // Validate layer selected
  if(allLayers.length == 0) {
    sketch.UI.message('Debes seleccionar un artboard')
    return
  }

  // Get selected layer
  let mainLayer = layers[0]
  if(mainLayer.frame.width != 1024 && mainLayer.frame.height != 1024) {
    sketch.UI.message('Tu imagen debe tener un tamaño de 1024')
    return
  }

  // Create Arboards
  function makeArtboards() {
    const appIconSizes = [512, 152, 120, 80, 76, 58, 40, 29]
    const layersToExport = [mainLayer]
    const artboardSpace = 50
    const appIconSizeSum = 0
    appIconSizes.forEach((appIconSize, index) => {
      const newLayerX = 0
      if (index == 0) {
        newLayerX = mainLayer.frame.x + mainLayer.frame.width + artboardSpace
        print(`${index} ${appIconSize} ${newLayerX}`)
      } else {
        appIconSizeSum += appIconSizes[index-1]
        newLayerX = mainLayer.frame.x + mainLayer.frame.width + appIconSizeSum + (artboardSpace*(index+1))
        print(`${index} ${appIconSize} ${newLayerX}`)
      }
      const newLayerY = mainLayer.frame.y
      const newLayer = mainLayer.duplicate()
      newLayer.frame = new Rectangle(newLayerX, newLayerY, appIconSize, appIconSize)
      const currentImage = newLayer.layers[0]
      currentImage.frame.width = appIconSize
      currentImage.frame.height = appIconSize
      newLayer.name = `${appIconSize}`
      newLayer.selected = true
      layersToExport.push(newLayer)
    })
    return layersToExport
  }

  // export
  const config = { scales: '1,2,3', formats: 'png', output: '~/Desktop/ios-appicon', overwriting: true }
  sketch.export(makeArtboards(), config)
}
