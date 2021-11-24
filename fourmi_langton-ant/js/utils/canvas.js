export const canvas = document.querySelector('canvas')
export const context = canvas.getContext('2d')

export const resizeCanvas = (width, height) => {
  canvas.width = width
  canvas.height = height

  // Important: repeindre en blanc le canvas après l'avoir redimensionné.
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)
}

export const setPixel = (x, y, color) => {

  console.log(x, y, color)
  context.fillStyle = color
  context.fillRect(x, y, 1, 1)
}

export const getPixel = (x, y) => {

  const [r, g, b] = context.getImageData(x, y, 1, 1).data
  const rgb = r << 16 | g << 8 | b
  return `#${rgb.toString(16).padStart(6, '0')}`
}