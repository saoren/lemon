/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 18:38:23
 * @LastEditTime: 2022-02-22 18:42:28
 */
const Router = require('koa-router')
const router = new Router()
const {query}= require('../../utils')
const Login= require('./login')
const Register= require('./register')
const Info= require('./info')
const upload= require('./upload')
//返回所有用户的数据
router.get('/',async ctx=>{
    
    //在ctx.body之前拿到数据,返回给前端
    ctx.body ='管理系统'//相当于return
})

router.use('/login',Login.routes(),Login.allowedMethods())
router.use('/register',Register.routes(),Register.allowedMethods())
router.use('/info',Info.routes(),Info.allowedMethods())
router.use('/upload',upload.routes(),upload.allowedMethods())



module.exports =router