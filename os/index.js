import getCpus from './modules/getCpus.js'
import getEol from './modules/getEol.js'
import getHomeDir from './modules/getHomeDir.js'
import getUserName from './modules/getUserName.js'
import getArchitecture from './modules/getArchitecture.js'
import { printMessage } from '../msg/index.js'

const OS_OPERATIONS = {
  '--EOL': getEol,
  '--cpus': getCpus,
  '--homedir': getHomeDir,
  '--username': getUserName,
  '--architecture': getArchitecture,
}

const os = async args => {
  const isArgsValid = args.length === 1
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [osArgument] = args
      const isArgValid = OS_OPERATIONS.hasOwnProperty(osArgument)
    
      isArgValid
        ? OS_OPERATIONS[osArgument]()
        : printMessage('Invalid input', 'red')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default os