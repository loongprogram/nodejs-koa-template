// TODO: 完善日志功能
class Logger {
  debug (msg) {
    console.debug(msg)
  }

  info (msg) {
    console.info(msg)
  }

  error (msg, ...optionalParams) {
    console.error(msg, optionalParams)
  }
}

module.exports = new Logger()
