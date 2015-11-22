angular.module('myApp', ['MessageService', 'ngRoute', 'luegg.directives']).config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'MainController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

});