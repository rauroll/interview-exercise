angular.module('myApp').controller('MainController', ['MessageService', '$scope', '$rootScope', function(MessageService, $scope, $rootScope) {

	$scope.variable = "Hello world!";
	$scope.updating;

	$scope.messages = ["hello", "world"];

	$scope.send = function(message) {
		MessageService.sendMessage(message).then(function(data) {
			MessageService.getMessages().then(function(data) {
				$scope.messages = data;
			});
		});
	}
}])