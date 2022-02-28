/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-22 14:08:00
 * @LastEditTime: 2022-02-22 19:01:39
 * 用户信息接口
 */
const Router = require("koa-router");
const router = new Router();
const { returnMsg, queryFn, jwtVerify} = require("../../utils");
//const jwt = require("jsonwebtoken");

router.get('/',async (ctx)=>{
    //获取token,前端请求头携带的token
    /**
     * ctx.request 请求 ctx.request.headers 请求头    ctx.request.body 请求体
     * ctx.body   响应 ctx.response 响应体
     */
    let token =ctx.request.headers['cms-token']


    //鉴权
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2, "查询失败", "token过期或不存在");
        return;
    }

    //数据库查询对应的用户
    let sql=`SELECT username,token,avatar FROM user WHERE token='${token}'`
    let result = await queryFn(sql) 


    ctx.body= result[0]

})

//修改用户信息
router.post('/',async ctx=>{

    
    //鉴权
    let token =ctx.request.headers['cms-token']
        if(!jwtVerify(token)){
            ctx.body = returnMsg(2, "查询失败", "token过期或不存在");
            return;
        }
    //鉴权成功：修改数据库中对应的字段
        let {username,password} = ctx.request.body

        //查是否重复名字
        let sql_b=`SELECT * FROM user WHERE username='${username}'`
        let result_b = await queryFn(sql_b) 
        if(result_b.length>0){
            ctx.body = returnMsg(2, "用户名已存在");
            return;
        }
        //检索
        let sql_a=`SELECT username,password FROM user WHERE token='${token}'`
        let result_a = await queryFn(sql_a) 
        
        let sql =`UPDATE user SET username='${username ||result_a[0].username}',password='${password ||result_a[0].password}' WHERE token='${token}'`
        await queryFn(sql) 
        

        let sql_=`SELECT username,token,avatar FROM user WHERE token='${token}'`
        let result = await queryFn(sql_) 
        ctx.body= returnMsg(0, "修改成功", {
            avatar:result[0].avatar,
            username:result[0].username,
            'cms-token':result[0].token
        });

})

module.exports = router;