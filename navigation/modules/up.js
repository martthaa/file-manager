import { join } from 'path'
import { env } from 'process'
import { printInvalidInputMsg } from '../../msg/index.js'

const up = async args => {
  const isArgsValid = args.length === 0
  
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      env.CURRENT_DIR = join(env.CURRENT_DIR, '..')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default up