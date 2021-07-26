const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.post('/new', (req, res) => {
  const newAuthor = req.body.author;
  const newMessageText = req.body.messageText;
  messages.push({text: newMessageText, user: newAuthor, added: new Date()});
  res.redirect('/');
});


module.exports = router;
