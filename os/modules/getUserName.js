import { userInfo } from 'os'
import { printMessage } from '../../msg/index.js'
import { colorizeText } from '../../utils/index.js'

const getUserName = () => {
  const { username } = userInfo()
  const colorizedUserName = colorizeText(username, 'yellow')
  printMessage(`System user name: ${colorizedUserName}`, 'blue')
}

export default getUserName