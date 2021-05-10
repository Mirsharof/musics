const express = require('express');
const Music = require('../model/Music');
const router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('MusicAdd', {title: "Musiqa qo`shish sahifasi"});
});


/* Post users listing. */
router.post('/add', function(req, res, next) {
  // console.log('jo`natdik');
  const music = new  Music();

  music.name = req.body.name;
  music.singer = req.body.singer;
  music.comment = req.body.comment;

  music.save((err) => {
    if(err) console.log(err);
    else{
      res.redirect('/')
    }
  })
});



module.exports = router;
