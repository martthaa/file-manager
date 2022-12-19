import { env } from 'process'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { printInvalidInputMsg } from '../../msg/index.js'

const add = async args => {
  const isArgsValid = args.length === 1
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [fileName] = args
      const path = join(env.CURRENT_DIR, fileName)
      await writeFile(path, '')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default add