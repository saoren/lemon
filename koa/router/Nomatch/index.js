/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 19:02:38
 * @LastEditTime: 2022-02-21 20:51:30
 */
const fs = require('fs')
const path = require('path')
const mime =require('mime-types')


const Router = require('koa-router')
const router =new Router

router.get('/',async ctx=>{
        //获取404的路径
        let filePath=path.join(__dirname,'../../static/images/404.jpg')
        //fs模块同步读取文件
        let file =fs.readFileSync(filePath)
        //根据得到的文件的类型,设置content-type是什么类型
        let mimeTypes=mime.lookup(filePath)
        //设置content-type是什么类型
        ctx.set('content-type',mimeTypes)
        ctx.body =file
})

module.exports =router