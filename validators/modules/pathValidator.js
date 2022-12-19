import { normalize, resolve, dirname } from 'path'
import { existsSync } from 'fs'

const pathValidator = (path, onlyDirectory) => {
  const resolvedPath = resolve(process.env.CURRENT_DIR, path)
  const normalizedPath = normalize(resolvedPath)

  const pathDirOrFile = onlyDirectory ? dirname(normalizedPath) : normalizedPath
  const isPathExists = existsSync(pathDirOrFile)

  return { normalizedPath, isPathExists }
}

export default pathValidator