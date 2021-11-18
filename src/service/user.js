const BaseService = require('./base')

class UserService extends BaseService {
  async get (id) {
    return this.UserModel.findByPk(id, {
      include: [{
        model: this.MovieModel,
        as: 'movies'
      }]
    })
  }

  async getAll () {
    return this.UserModel.findAndCountAll()
  }

  async create (name) {
    return this.UserModel.create({ name })
  }
}

module.exports = new UserService()
