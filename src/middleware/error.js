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
        console.error(error)
        ctx.status = error.code || 500
      }
    }
  }
}

module.exports = new ErrorHandler()
