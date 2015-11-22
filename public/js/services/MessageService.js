angular.module('MessageService', []).factory('MessageService',
	['$q', '$timeout', '$http',
	function($q, $timeout, $http) {



		return ({
			sendMessage: sendMessage,
			getMessages: getMessages
		});

		function sendMessage(msg) {

			var deferred = $q.defer();

			$http.post('/messages/add', {message: msg})
				.success(function (data, status) {
					deferred.resolve(data.ok);			
				})
				.error(function() {
					deferred.reject();
				})

			return deferred.promise;
		}

		function getMessages() {

			var deferred = $q.defer();

			$http.get('/messages/list')
			.success(function(data) {
				deferred.resolve(data.messages);
			})
			.error(function() {
				deferred.reject();
			})
			return deferred.promise;
		}
}]);