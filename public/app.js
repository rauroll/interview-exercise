angular.module('myApp', ['ngRoute']).config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'templates/home',
		controller: 'MainController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

});