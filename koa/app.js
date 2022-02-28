/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 18:08:54
 * @LastEditTime: 2022-02-22 19:16:27
 */
const Koa = require('koa2')
const app = new Koa()

const Router = require('koa-router')
const router =new Router


const manage = require('./router/manage')
const web = require('./router/web')
const nomatch =require('./router/Nomatch')

const {port, host} =require('./utils')

//引入跨域
const cors =require('koa2-cors')
//引入koa-static中间件
const static =require('koa-static')
const path =require('path')
//引入获取请求体
const bodyParser = require('koa-bodyparser');

router.get('/',async ctx=>{
    ctx.body ="首页数据"
})


router.use('/manage',manage.routes(),manage.allowedMethods())
router.use('/web',web.routes(),web.allowedMethods())
router.use('/404',nomatch.routes(),nomatch.allowedMethods())

//访问/  重定向到manage
// router.redirect("/",'/manage')



//前端随意请求， 我们都给他一个404
app.use(async (ctx,next)=>{
    await next() //放下你下一个中间件
    //一旦状态是 404 就重定向到404页面
    if(ctx.status === 404) {
        //ctx.body =>ctx.response.body 的简写
        ctx.response.redirect('/404')
    }

})
app.use(cors()) //允许跨域
app.use(bodyParser());	// bodyParser


app.use(router.routes(),router.allowedMethods())

//读取静态资源的中间件要写在路由的后面   __dirname=>当前文件的路径
//在页面中如何读取404.jpg ? http://localhost:9000/images/404.jpg
app.use(static( path.join(__dirname,'static') ))
app.use(static( path.join(__dirname,'router/manage/upload') ))




app.listen(9000,()=>{
    console.log(`Server is running at ${host}:${port}`)
})

