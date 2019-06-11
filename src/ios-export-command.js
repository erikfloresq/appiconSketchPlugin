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

  // Create new layer
  const appIconSizes = [76, 152, 501]

  function makeAppIcon(appIconSizes) {
    const artboardSpace = 50
    var layers = [mainLayer]
    appIconSizes.forEach(appIconSize => {
      console.log(appIconSize)
      let mainLayerX = mainLayer.frame.x + mainLayer.frame.width + artboardSpace
      let mainLayerY = mainLayer.frame.y
      let newLayer = mainLayer.duplicate()
      let newLayerX = mainLayerX + appIconSize + (artboardSpace*(appIconSizes.length+1))
      let newLayerY = mainLayerY
      newLayer.frame = new Rectangle(newLayerX, newLayerY, appIconSize, appIconSize)
      let currentImage = newLayer.layers[0]
      currentImage.frame.width = appIconSize
      currentImage.frame.height = appIconSize
      newLayer.name = `${appIconSize}`
      newLayer.selected = true
      layers.push(newLayer)
    });
    return layers
  }

  const layersToExport = makeAppIcon(appIconSizes)

  // export
  const config = { scales: '1,2,3', formats: 'png', output: '~/Desktop/ios-appicon', overwriting: true }
  sketch.export(layersToExport, config)
}
