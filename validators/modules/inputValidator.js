const inputValidator = (splittedInput, OPERATIONS) => {
    const { length } = splittedInput
    const [operation, arg1, arg2] = splittedInput
  
    if (length < 0 || length > 3) return false
    if (!operation) return false
    if (length === 2 && !arg1) return false
    if (length === 3 && (!arg1 || !arg2)) return false
  
    const isOperationExists = OPERATIONS.hasOwnProperty(operation)
    if (!isOperationExists) return false
  
    return true
  }
  
  export default inputValidator