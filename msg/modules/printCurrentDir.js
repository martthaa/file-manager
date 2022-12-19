import printMessage from './printMessage.js'
import { colorizeText } from '../../utils/index.js'

const printCurrentDir = () => {
  const currentDir = colorizeText(process.env.CURRENT_DIR, 'yellow')
  printMessage(`You are currently in ${currentDir}`)
}

export default printCurrentDir