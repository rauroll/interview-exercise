var express = require('express');
var router = express.Router();

var messages = [];

router.get('/list', function(req, res) {
	console.log("List called, returning: " + messages.length + " messages");
	return res.send({messages: messages});
});

router.post('/add', function(req, res) {
	console.log("Add called, payload: " + req.body.message);
	messages.push(req.body.message);
	return res.send({ok: true});
})

module.exports = router;