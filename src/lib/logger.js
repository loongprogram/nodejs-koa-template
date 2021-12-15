const winston = require('winston')
const config = require('config')
const logLevel = config.get('logLevel')

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.json(),
  defaultMeta: { service: 'koa-template' },
  transports: [
    new winston.transports.Console()
  ]
})

class Logger {
  debug (msg) {
    logger.debug(msg)
  }

  info (msg) {
    logger.info(msg)
  }

  error (msg) {
    logger.error(msg)
  }
}

module.exports = new Logger()
