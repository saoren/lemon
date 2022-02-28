/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-22 18:40:30
 * @LastEditTime: 2022-02-22 19:06:33
 * upload接口
 */
const Router = require("koa-router");
const cors = require("koa2-cors");
const router = new Router();
const { returnMsg, queryFn, jwtVerify } = require("../../utils");
const path = require("path");
//const jwt = require("jsonwebtoken");
const multer = require("@koa/multer"); //加载@koa/multer模块

let myfilename = "";

var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/upload/"));
  },
  //修改文件名称
  filename: function (req, file, cb) {
    let type = file.originalname.split(".")[1];
    // logo.png -> logo.xxx.png
    myfilename = `${file.fieldname}-${Date.now().toString(16)}.${type}`;
    cb(null, myfilename);
  },
});
//限制大小
const limits = {
  fields: 10, //非文件字段的数量
  fileSize: 200 * 1024, //文件大小 单位 b
  files: 1, //文件数量
};
const upload = multer({ storage, limits });

//允许跨域
router.post("/", upload.single("avatar"), async (ctx) => {
  //鉴权
  let token = ctx.request.headers["cms-token"];
  if (!jwtVerify(token)) {
    ctx.body = returnMsg(2, "查询失败", "token过期或不存在");
    return;
  }

  //成功,修改token对应的avatar对应的字段
  let sql = `UPDATE user SET avatar='${myfilename}' WHERE token='${token}'`;
  await queryFn(sql);

  let sql_a = `SELECT username,avatar,token FROM user WHERE token='${token}'`;
  let result = await queryFn(sql_a);

  ctx.body = returnMsg(0, "修改成功", {
    avatar: result[0].avatar,
    username: result[0].username,
    "cms-token": result[0].token,
  });
});

module.exports = router;
