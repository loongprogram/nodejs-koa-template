const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

const UserModel = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: DataTypes.STRING
}, {
  tableName: 'user'
})

module.exports = UserModel
