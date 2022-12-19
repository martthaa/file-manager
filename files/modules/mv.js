import { rename } from 'fs/promises'
import { pathValidator } from '../../validators/index.js'
import { resolve, parse } from 'path'
import { printInvalidInputMsg } from '../../msg/index.js'

const mv = async args => {
  const isArgsValid = args.length === 2
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [ from, to ] = args
      const { normalizedPath: fromPath, isPathExists: isFromPathValid } = pathValidator(from)
      const { normalizedPath: toPath, isPathExists: isToPathValid } = pathValidator(to, true)
    
      const { name, ext } = parse(fromPath)
      const toPathWithFileName = resolve(toPath, name + ext)
    
      if (isFromPathValid && isToPathValid) await rename(fromPath, toPathWithFileName)
      else throw new Error('There is no such directory or file')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default mv