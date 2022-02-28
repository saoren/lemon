/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 21:19:53
 * @LastEditTime: 2022-02-21 23:12:56
 */
/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 21:17:14
 * @LastEditTime: 2022-02-21 21:19:25
 */
const Router = require("koa-router");
const router = new Router();

const { returnMsg,queryFn } = require("../../utils");



router.post("/", async (ctx) => {
  let { username, password } = ctx.request.body;
  if (username && password) {

    let sql = `SELECT * FROM user WHERE username='${username}'`
    let result = await queryFn(sql)
    if(result.length>0){
        ctx.body = returnMsg(2, "注册失败", '该用户已存在')
    }
    else{
        let sql1=`INSERT INTO user VALUES (null,'${username}','${password}',null,'avatar.png')`
        await queryFn(sql1)
        ctx.body = returnMsg(0, "注册成功");
    }
    
    
  } else {
    ctx.body = returnMsg(1, "请求失败", "参数错误")
  }
  //写入数据库   分配一个token.头像
});

module.exports = router;
