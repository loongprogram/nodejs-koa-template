const router = require('koa-joi-router')
const userService = require('../../service/user')

const Joi = router.Joi
const user = router()
user.prefix('/api/v1/user')

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: 获取用户列表
 *     description: 获取用户列表
 *     tags:
 *       - user
 *     responses:
 *       200:
 *         description: 成功获取
 */
user.get('/', async ctx => {
  const result = await userService.getAll()
  ctx.body = result
})

/**
 * @swagger
 * /api/v1/user/:id:
 *   get:
 *     summary: 获取用户列表
 *     description: 获取用户列表
 *     tags:
 *       - user
 *     parameters:
 *       - name: 'id'
 *         in: 'path'
 *         description: 'ID of user to return'
 *         required: true
 *         type: 'string'
 *     responses:
 *       200:
 *         description: 成功获取
 */
user.get('/:id', {
  validate: {
    params: {
      id: Joi.string().required()
    }
  }
}, async ctx => {
  const { id } = ctx.request.params
  const result = await userService.get(id)
  ctx.body = result
})

user.post('/', {
  validate: {
    type: 'json',
    body: {
      name: Joi.string().required()
    }
  }
}, async ctx => {
  const { name } = ctx.request.body
  const result = await userService.create(name)
  ctx.body = result
})

user.put('/:id', {
  validate: {
    type: 'json',
    body: {
      name: Joi.string().required(),
      movies: Joi.array().items({
        id: Joi.string().required()
      })
    }
  }
}, async ctx => {
  const { name } = ctx.request.body
  const result = await userService.create(name)
  ctx.body = result
})

module.exports = user
