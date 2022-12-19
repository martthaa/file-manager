import { EOL } from 'os'
import { stdout } from 'process'
import { createReadStream } from 'fs'
import { pathValidator } from '../../validators/index.js'
import { printInvalidInputMsg } from '../../msg/index.js'

const cat = async args => {
  const isArgsValid = args.length === 1
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [ filePath ] = args
      const { normalizedPath, isPathExists } = pathValidator(filePath)

      if (isPathExists) {
        await new Promise((resolve, reject) => {
          const readable = createReadStream(normalizedPath)
          readable.on('data', chunk => stdout.write(chunk))
          readable.on('end', () => {
            resolve()
            stdout.write(EOL)
          })
          readable.on('error', err => reject(err))
        })
      }
      else printInvalidInputMsg()
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default cat