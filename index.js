import { homedir } from 'os'
import { printStartMsg, printExitMsg } from './msg/index.js'
import router from './router/index.js'

const closeStdin = () => process.stdin.destroy()
const initEnv = () => process.env.CURRENT_DIR = homedir

const runCli = () => {
  initEnv()
  printStartMsg()

  process.stdin
    .on('data', router)
    .on('close', printExitMsg)

  process
    .on('SIGINT', closeStdin)
}

runCli()