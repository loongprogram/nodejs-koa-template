require('../model/association')

class BaseService {
  constructor () {
    this.initModel()
    this.logger = require('../lib/logger')
  }

  initModel () {
    this.UserModel = require('../model/user')
    this.MovieModel = require('../model/movie')
  }
}

module.exports = BaseService
