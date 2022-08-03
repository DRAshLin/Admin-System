var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send([
    {
      id:1,
      username:'AshAdmin',
      role: [{
        roleId:1,
        roleName:'Admin'
      }]
    },
    {
      id:2,
      username:'Tourist',
      role: [{
        roleId:2,
        roleName:'Common'
      }]
    },
  ]);
});

router.post('/user',function(req,res,next) {
  // const { username, password } = req.body

  // 数据库验证账号密码
  if(false) {
    // 验证失败
    res.send('账号或密码错误!')
  } 
  // 验证成功
  res.send('登录成功!')
})

module.exports = router;
