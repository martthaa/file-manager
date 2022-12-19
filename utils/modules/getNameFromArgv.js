import colorizeText from './colorizeText.js'

const getNameFromArgv = () => {
  const argName = process.argv[2]
  const emptyArgError = colorizeText('There is no passed argument!', 'red')
  if (!argName) throw new Error(emptyArgError)

  const isArgNameValid = argName.startsWith('--username=')
  const invalidArgError = colorizeText('The passed argument is not valid!', 'red')
  if (!isArgNameValid) throw new Error(invalidArgError)

  const userName = argName.slice(11, argName.length)
  return userName
}

export default getNameFromArgv