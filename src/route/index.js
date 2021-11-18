const router = require('koa-joi-router')()
const user = require('./v1/user')

router.use(user.middleware())

module.exports = router
