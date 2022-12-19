const COLORS = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    white: '\x1b[37m',
    blue: '\x1b[36m',
    purple: '\x1b[35m',
    yellow: '\x1b[33m',
  }
  
  const colorizeText = (msg, color) => COLORS[color] + msg + COLORS.white
  
  export default colorizeText