const App = require('koa')
const route = require('./route')
const { error } = require('./middleware')
const logger = require('./lib/logger')

const app = new App()

app.use(error.middleware())
app.use(route.middleware())

app.listen(80, () => {
  logger.info('App start: http://localhost')
})
