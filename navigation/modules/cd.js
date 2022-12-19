import { env } from 'process'
import { printInvalidInputMsg } from '../../msg/index.js'
import { pathValidator } from '../../validators/index.js'

const cd = async args => {
  const isArgsValid = args.length === 1
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [path] = args
      const { normalizedPath, isPathExists } = pathValidator(path)

      if (isPathExists) env.CURRENT_DIR = normalizedPath
      else throw new Error('There is no such directory')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default cd