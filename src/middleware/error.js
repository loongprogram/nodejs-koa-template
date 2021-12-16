const { BizError } = require('../lib/error')
const logger = require('../lib/logger')

/**
 * 全局异常处理中间件
 */
class ErrorHandler {
  middleware () {
    /**
     * @param {import('koa').Context} ctx http 上下文
     * @param {import('koa').Next} next 下一个中间件
     */
    return async (ctx, next) => {
      try {
        await next()
      } catch (error) {
        switch (true) {
          case error instanceof BizError:
            ctx.body = error.message
            ctx.status = error.code
            break
          default:
            logger.error(error)
        }
        ctx.status = error.code || 500
      }
    }
  }
}

module.exports = new ErrorHandler()
