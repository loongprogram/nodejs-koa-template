const env = process.env.NODE_ENV ?? 'debug'
const config = require(`./${env}.json`)
module.exports = config
