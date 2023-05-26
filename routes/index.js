const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hello! To create a new message, navigate to the view tab and fill out the form!',
    user: 'Admin',
    added: new Date(),
  },
  {
     text: 'Hello Message Board!', 
     user: 'Me',
     added: new Date(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Message Board',
    messages: messages,
  });
});

router.get('/new', function(req, res, next) {
  res.render('messageform', {
    title: 'New Message',
  });
});

router.post('/new', function(req, res, next) {
  const newMessage = {
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  }

  messages.push(newMessage);

  res.redirect('/');
});
module.exports = router;
