import { arch } from 'os'
import { printMessage } from '../../msg/index.js'
import { colorizeText } from '../../utils/index.js'

const getArchitecture = () => {
  const architecture = arch()
  const colorizedArch = colorizeText(architecture, 'yellow')
  printMessage(`Operating system CPU architecture: ${colorizedArch}`, 'blue')
}

export default getArchitecture