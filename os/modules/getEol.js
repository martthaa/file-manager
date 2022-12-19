import { EOL } from 'os'
import { printMessage } from '../../msg/index.js'
import { colorizeText } from '../../utils/index.js'

const colorizedEOL = colorizeText(JSON.stringify(EOL), 'yellow')

const getEol = () => printMessage(`Default system End-Of-Line: ${colorizedEOL}`, 'blue')

export default getEol