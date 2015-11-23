angular.module('myApp').controller('MainController', ['MessageService', '$scope', '$rootScope', function(MessageService, $scope, $rootScope) {

	$scope.messages = ["Fetching..."];

	var socket = io();

	
	$scope.send = function() {
		var message = $scope.myForm.message
		MessageService.sendMessage(message).then(function(data) {
			socket.emit('send', message);
			$scope.myForm = {};
		})
		.catch(function() {
			$scope.error = true;
			$scope.errorMessage = "Failed to send the message."
			// todo, show errormessages
		});
	}

	$scope.getMessages = function() {
		$scope.loading = true;
		MessageService.getMessages().then(function(messages) {
			$scope.loading = false;
			$scope.messages = messages;
		});
	}

	socket.on('message', function(message) {
		$scope.messages.push(message);
		$scope.$apply();
	});

	$scope.getMessages();

}]);