angular.module('myApp').controller('MainController', ['MessageService', '$scope', '$rootScope', function(MessageService, $scope, $rootScope) {

	$scope.messages = ["Fetching..."];


	
	$scope.send = function(message) {
		MessageService.sendMessage($scope.myForm.message).then(function(data) {
			$scope.myForm = {};
			MessageService.getMessages().then(function(data) {
				$scope.messages = data;
			});
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
			if (messages.length == 0) {
				$scope.messages = ["No world saving strings found"];
			} else {
				$scope.messages = messages;
			}
		});
	}

	$scope.getMessages();

}])