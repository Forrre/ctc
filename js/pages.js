angular.module("ctc", ["ngRoute"])
.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			templateUrl : "pages/main.html"
		})
		.when("/cat1", {
			templateUrl : "pages/cat1.html"
		})
		.otherwise({
			redirectTo	: "index.html"
		});
	$locationProvider.html5Mode(true);
});