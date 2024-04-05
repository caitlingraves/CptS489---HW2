var express = require('express');
const Comments = require('../models/Comment');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/login', async function(req, res, next) {
//   const comments = await Comments.findUser(name, email)
//   if(comments!== null){
//     req.session.comments = comments
//     res.redirect("/signed")
//   }else{
//     res.redirect("/?msg=fail")
//   }
// });



const sessionChecker = (req, res, next)=>{
  if(req.session.comments){
    next()
  }else{
    res.redirect("/?msg=raf")
  }
}

/* GET users listing. */
router.get('/', async (req, res) => {
  //console.log(req.session.user)
  try {
    const comments = await Comments.findAll();
    res.render('index', { comments });
  } catch (error) {
    console.error('Error retrieving comments:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, comment } = req.body;
    const newComment = await Comments.create({ name, email, comment });
    res.redirect("/")
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;