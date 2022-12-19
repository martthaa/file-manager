import { homedir } from 'os'
import { printMessage } from '../../msg/index.js'
import { colorizeText } from '../../utils/index.js'

const getHomeDir = () => {
  const colorizedHomeDir = colorizeText(homedir, 'yellow')
  printMessage(`Home directory: ${colorizedHomeDir}`, 'blue')
}

export default getHomeDir