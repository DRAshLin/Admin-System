var express = require('express');
var router = express.Router();

router.get('/role', function(req, res, next) {
    res.send([
      {
        roleId:1,
        roleName:'Admin',
        right: [1,2,3]
      },
      {
        roleId:2,
        roleName:'Common',
        right: [3]
      },
    ]);
  });

module.exports = router;