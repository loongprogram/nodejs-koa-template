/**
 * 全局错误
 */
class BizError extends Error {
  /**
     *
     * @param {number} code 错误码，http code
     * @param {string} msg 错误消息
     */
  constructor (code, msg) {
    super(msg)
    this.code = code
  }
}

module.exports = { BizError }
