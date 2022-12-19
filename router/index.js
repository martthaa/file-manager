import os from '../os/index.js'
import hash from '../hash/index.js'
import { printCurrentDir, printInvalidInputMsg, printOperationFailedMsg } from '../msg/index.js'
import { ls, up, cd } from '../navigation/index.js'
import { inputValidator } from '../validators/index.js'
import { rn, add, rm, cp, mv, cat } from '../files/index.js'
import { compress, decompress } from '../compress/index.js'
import { getArrFromStr } from '../utils/index.js'

const closeStdin = () => process.stdin.destroy()
const OPERATIONS = { up, ls, os, cd, rn, add, rm, cp, mv, cat, hash, compress, decompress, '.exit': closeStdin }

const router = async input => {
  try {
    const splittedInput = getArrFromStr(input)
    const isInputValid = inputValidator(splittedInput, OPERATIONS)

    if (!isInputValid) printInvalidInputMsg()
    else {
      const [operation, ...args] = splittedInput
      await OPERATIONS[operation](args)
      if (operation !== '.exit') printCurrentDir()
    }    
  }
  catch(err) {
    printOperationFailedMsg()
  }
}

export default router