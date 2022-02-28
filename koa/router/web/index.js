/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 18:38:36
 * @LastEditTime: 2022-02-21 18:57:02
 */

const Router = require('koa-router')
const router = new Router()

router.get('/',async ctx=>{
    ctx.body ="官网数据"
})






module.exports =router