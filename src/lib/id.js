const getIPAddress = () => {
  const interfaces = require('os').networkInterfaces()
  for (const devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

/**
 * 生成唯一ID，参考雪花算法，
 * 每个机器每毫秒理论上可以生成 2^12 个Id
 * 最多支持 2^8 个 workId，
 * 开发机器上每秒大约生成180w个ID
 *
 * [1] 不用，[2-42]时间戳(41bit)，[43-50]机器Id(8bit)，[51-62]序列号(12bit)
 */
class ID {
  constructor () {
    this.START_MILLISECOND = 1600000000000n
    this.SEQUENCE_BIT = 12n
    this.MACHINE_BIT = 8n
    this.MAX_MACHINE = -1n ^ (-1n << this.MACHINE_BIT)
    this.MAX_SEQUENCE = -1n ^ (-1n << this.SEQUENCE_BIT)
    this.MACHINE_SHIFT = BigInt(this.SEQUENCE_BIT)
    this.MILLISECOND_SHIFT = this.MACHINE_SHIFT + this.MACHINE_BIT

    this.lastMillisecond = 0n
    // TODO: workId 使用的IP D段，可能会冲突
    this.workId = BigInt(getIPAddress().split('.').pop())
    this.sequence = 0n
  }

  next () {
    let now = this.newMillisecond()
    if (now < this.lastMillisecond) {
      // TODO：如果时间回退并且服务重启，可能会出现ID重复的情况
      now = this.lastMillisecond + 1
    }
    if (now === this.lastMillisecond) {
      this.sequence = (this.sequence + 1n) & this.MAX_SEQUENCE
      if (this.sequence === 0n) {
        now = this.nextMilliSecond()
      }
    } else {
      this.sequence = 0n
    }

    this.lastMillisecond = now

    const id = (now - this.START_MILLISECOND) << this.MILLISECOND_SHIFT |
        this.workId << this.MACHINE_SHIFT |
        this.sequence

    return id.toString()
  }

  /**
   * @private
   */
  newMillisecond () {
    return BigInt(Date.now())
  }

  /**
   * @private
   */
  nextMilliSecond () {
    let millisecond = this.newMillisecond()
    while (millisecond <= this.lastMillisecond) {
      millisecond = this.newMillisecond()
    }
    return millisecond
  }
}

module.exports = new ID()
