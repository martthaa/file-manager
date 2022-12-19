import printMessage from './printMessage.js'
import { getNameFromArgv, colorizeText } from '../../utils/index.js'

const printExitMsg = () => {
  const userName = getNameFromArgv()
  const colorizedUserName = colorizeText(userName, 'yellow')

  printMessage(`Thank you for using File Manager, ${colorizedUserName}!`, 'blue')
}

export default printExitMsg