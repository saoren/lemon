const Router = require("koa-router");
const router = new Router();
const { returnMsg, queryFn, jwtVerify} = require("../../../utils");

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
        return;W
    }

    //数据库查询对应的用户
    let sql=`SELECT id,name,num,sort,createtime FROM label`
    let result = await queryFn(sql) 


    ctx.body= result[0]

})
module.exports = router;