angular.module('MessageService', []).factory('MessageService',
	['$q', '$timeout', '$http',
	function($q, $timeout, $http) {



		return ({
			sendMessage: sendMessage
		});

		function sendMessage(msg) {

			var deferred = $q.defer();

			$http.post('/send', {message: msg})
				.success(function (data, status) {
					deferred.resolve(true);			
				})
				.error(function() {
					deferred.reject();
				})

			return deferred.promise;
		}

		function getMessages() {

			var deferred = $q.defer();

			$http.get('/messages')
			.success(function(data) {
				deferred.resolve(data.messages);
			})
			.error(function() {
				deferred.reject();
			})
			return deferred.promise;
		}
}]);