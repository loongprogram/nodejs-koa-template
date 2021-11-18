const { Sequelize } = require('sequelize')
const options = require('../../config').sequelize
const logger = require('../lib/logger')

/**
 * @type {import('sequelize').Options}
 * 环境无关的 options
 */
const customOptions = {
  dialect: 'mysql',
  timezone: '+08:00'
}

const sequelize = new Sequelize(Object.assign(options, customOptions))

// 测试数据库连接是否成功
sequelize.authenticate().then(() => {
  logger.info('Mysql connection has been established successfully.')
  return sequelize.sync()
}).catch(error => {
  logger.error('Unable to connect to the database:', error)
})

module.exports = sequelize
