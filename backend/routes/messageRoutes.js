var express = require('express');
var router = express.Router();

// Model
const MessageModel = require('../models/messageModel');

/* Messages CRUD */


// [domainname.com]/message/
router.get('/', function (req, res, next) {
  const query = MessageModel.find();
  query
    .then((result) => { res.json({ message: "All Messages", data: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/
router.post('/', function (req, res, next) {
  const newMessage = new MessageModel(req.body);
  newMessage.save()
    .then((result) => res.json({ message: 'Message Saved', data: result }))
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/MessageID
router.get('/:messageID', function (req, res, next) {
  // const query = MessageModel.find({_id:req.params.messageID});
  const query = MessageModel.findById(req.params.messageID);
  query
    .then((result) => { res.json({ message: "Message:", data: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/MessageID
router.put('/:messageID', function (req, res, next) {
  const query = MessageModel.findByIdAndUpdate(req.params.messageID, req.body, { new: true });

  query
    .then((result) => { res.json({ message: "Message Updated", data: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/MessageID
router.delete('/:messageID', function (req, res, next) {
  const query = MessageModel.findByIdAndDelete(req.params.messageID);
  query
    .then((result) => { res.json({ message: "Message Deleted!", data: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});



// [domainname.com]/message/
router.get('/getall', function (req, res, next) {
  res.json({ message: 'Welcome to the Contact Form API! From Message.' });
});

module.exports = router;
