import { rename } from 'fs/promises'
import { join } from 'path'
import { env } from 'process'
import { pathValidator } from '../../validators/index.js'
import { printInvalidInputMsg } from '../../msg/index.js'

const rn = async args => {
  const isArgsValid = args.length === 2
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [path, newName] = args
      const { normalizedPath: pathToFile, isPathExists } = pathValidator(path)
      const pathToNewFile = join(env.CURRENT_DIR, newName)
    
      if (isPathExists) await rename(pathToFile, pathToNewFile)
      else throw new Error('There is no such file')
    }
    catch(err) {
      throw new Error(err)
    }
  }


}

export default rn