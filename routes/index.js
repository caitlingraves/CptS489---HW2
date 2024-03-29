var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async function(req, res, next) {
  const user = await User.makeUser(req.body.name, req.body.email, req.body.comment)
  if(user!== null){
    req.session.user = user
    res.redirect("/signed")
  }else{
    res.redirect("/?msg=fail")
  }
});

module.exports = router;