import { EOL, cpus } from 'os'
import { printMessage } from '../../msg/index.js'
import { colorizeText } from '../../utils/index.js'

const getCpus = () => {
  const cpusList = cpus()

  const transformedCpusList = cpusList.map(cpu => {
    const { model, speed } = cpu

    const speedInGHz = `${speed / 1000}GHz`
    const colorizedModel = colorizeText(model, 'yellow')
    const colorizedSpeed = colorizeText(speedInGHz, 'yellow')

    return `{${EOL}  model: ${colorizedModel}, ${EOL}  speed: ${colorizedSpeed} ${EOL}}`
  })

  printMessage(transformedCpusList.join(EOL))
}

export default getCpus