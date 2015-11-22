angular.module('myApp').controller('MainController', ['MessageService', '$scope', '$rootScope', function(MessageService, $scope, $rootScope) {

	$scope.variable = "Hello world!";
	$scope.updating;

	$scope.messages = ["Fetching..."];

	MessageService.getMessages().then(function(messages) {
		if (messages.length == 0) {
			$scope.messages = ["No world saving strings found"];
		} else {
			$scope.messages = messages;
		}
	});

	$scope.send = function(message) {
		MessageService.sendMessage($scope.myForm.message).then(function(data) {
			MessageService.getMessages().then(function(data) {
				$scope.messages = data;
			});
		});
	}
}])