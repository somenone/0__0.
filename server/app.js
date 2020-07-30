const Koa = require('koa')
const app = new Koa()
const cors = require("@koa/cors")


const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(cors())

app.use(async (ctx, next) => {
    if(1){
        ctx.body = {
            code:200,
            message:"success",
            data:{
                time: Date.now()
            }
        }
    }else{
        await next()
    }
    
})

const router = require("./router/index")


app.use(router.routes())

app.use(async (ctx)=> {
    ctx.body = "hello world"
})

app.listen(3001)
