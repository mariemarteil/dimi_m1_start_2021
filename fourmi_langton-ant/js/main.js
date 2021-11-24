import { resizeCanvas } from './utils/canvas.js'
import * as ant from './ant.js'

resizeCanvas(32, 32)

let paused = true

const loop = () => {
  requestAnimationFrame(true)
  if (paused === false) {
    ant.move()
  }
}

loop()


document.querySelector('button#move').onclick = () => {
  ant.move()
}
