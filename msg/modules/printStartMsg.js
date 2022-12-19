import printMessage from './printMessage.js'
import printCurrentDir from './printCurrentDir.js'
import { getNameFromArgv, colorizeText } from '../../utils/index.js'

const printStartMsg = () => {
  const userName = getNameFromArgv()
  const colorizedUserName = colorizeText(userName, 'yellow')

  printMessage(`Welcome to the File Manager, ${colorizedUserName}!`, 'blue')
  printCurrentDir()
}

export default printStartMsg