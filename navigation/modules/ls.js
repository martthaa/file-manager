import { EOL } from 'os'
import { readdir } from 'fs/promises'
import { printMessage, printInvalidInputMsg } from '../../msg/index.js'

const ls = async args => {
  const isArgsValid = args.length === 0

  if (!isArgsValid) printInvalidInputMsg()
  else {
    try {
      const filesArr = await readdir(process.env.CURRENT_DIR)
      const isDirEmpty = !filesArr.length

      isDirEmpty
        ? printMessage('There is no files in the directory', 'red')
        : printMessage(filesArr.join(EOL), 'yellow')
    }
    catch(err) {
      throw new Error(err)
    }
  }
}

export default ls