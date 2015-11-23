var socketio = require('socket.io');


module.exports.listen = function(app) {
	io = socketio.listen(app);

	io.on('connection', function(socket) {

		socket.on('send', function(message) {
			io.sockets.emit('message', message);
		});
	});
}