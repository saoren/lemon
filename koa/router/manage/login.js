/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 21:17:14
 * @LastEditTime: 2022-02-22 01:07:11
 */
const Router = require("koa-router");
const router = new Router();
const { returnMsg, queryFn } = require("../../utils");
const jwt = require("jsonwebtoken");

router.post("/", async (ctx) => {
  let { username, password } = ctx.request.body;
  let sql = `SELECT * FROM user WHERE username='${username}'`;
  let result = await queryFn(sql);
  if (result[0].password === password) {
    //查询数据库

    if (result.length > 0) {
      //存在
      // 根据username和password生成token
      let token = jwt.sign(
        { username, password }, // 携带信息
        "lemon", // 秘钥
        { expiresIn: "1h" } // 有效期：1h一小时
      );
      let sql1 = `UPDATE user SET token='${token}' WHERE username='${username}'`;
      await queryFn(sql1);
      let NResult = await queryFn(sql);

      let ReturnObj={
        username:NResult[0].username,
        'cms-token':NResult[0].token,
        avatar:NResult[0].avatar

      }
      ctx.body = returnMsg(0, "登录成功", ReturnObj);
    } else {
      //不存在
      ctx.body = returnMsg(2, "用户不存在", "用户不存在,请先注册");
    }
  } else {

    ctx.body = returnMsg(1, "用户名或密码错误");
  }
});

module.exports = router;
