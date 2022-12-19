import { EOL } from 'os'
import { colorizeText } from '../../utils/index.js'

const printMessage = (msg, color='white') => {
  const configuredMsg = colorizeText(msg, color) + EOL + EOL
  process.stdout.write(configuredMsg)
}

export default printMessage