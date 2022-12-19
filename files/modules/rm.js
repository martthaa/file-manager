import { rm as remove } from 'fs/promises'
import { pathValidator } from '../../validators/index.js'
import { printInvalidInputMsg } from '../../msg/index.js'

const rm = async args => {
  const isArgsValid = args.length === 1
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [pathToFile] = args
      const { normalizedPath, isPathExists } = pathValidator(pathToFile)
    
      if (isPathExists) await remove(normalizedPath)
      else throw new Error('There is no such file')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default rm