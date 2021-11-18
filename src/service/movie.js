const BaseService = require('./base')

class MovieService extends BaseService {
  async get (id) {
    return this.UserModel.findByPk(id)
  }

  async create (name) {
    return this.UserModel.create({ name })
  }
}

module.exports = new MovieService()
