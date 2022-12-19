import { createReadStream, createWriteStream } from 'fs'
import { parse, resolve } from 'path'
import { pathValidator } from '../../validators/index.js'
import { printInvalidInputMsg } from '../../msg/index.js'

const cp = async args => {
  const isArgsValid = args.length === 2
  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const [ from, to ] = args
      const { normalizedPath: fromPath, isPathExists: isFromPathValid } = pathValidator(from)
      const { normalizedPath: toPath, isPathExists: isToPathValid } = pathValidator(to, true)

      const { name, ext } = parse(fromPath)
      const toFilePath = resolve(toPath, name + ext)
      const { isPathExists: isCopyExists } = pathValidator(toFilePath)

      if (isFromPathValid && isToPathValid && !isCopyExists) {
        await new Promise((resolve, reject) => {
          const readable = createReadStream(fromPath, { encoding: 'utf8', highWaterMark: 16 * 1024 })
          const writable = createWriteStream(toFilePath)
          readable.on('data', chunk => writable.write(chunk))
          readable.on('error', err => reject(err))
          readable.on('end', () => resolve())
          writable.on('error', err => reject(err))
        })
      }
      else throw new Error('There is no such directory/file or copy of file already exists')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default cp