const UserModel = require('./user')
const MovieModel = require('./movie')

// #region UserModel
UserModel.belongsToMany(MovieModel, { through: 'user_movie', as: 'movies' })
// #endregion

// #region MovieModel
MovieModel.belongsToMany(UserModel, { through: 'user_movie', as: 'users' })
// #endregion
