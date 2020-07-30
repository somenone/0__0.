const koarouter = require('koa-router')

const router = new koarouter()

router.get('/api', (ctx) => {
    ctx.body = "ok"
})

module.exports = router