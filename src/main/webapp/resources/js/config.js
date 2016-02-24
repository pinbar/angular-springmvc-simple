angular.module("app", [ "ngRoute", "controllersModule" ])
	.config(
		[ "$routeProvider", function($routeProvider) {
			$routeProvider.when("/info", {
				templateUrl : "resources/partials/info.html",
				controller : "PlayerController",
				controllerAs : "playerCtrl"
			}).when("/stats", {
				templateUrl : "resources/partials/stats.html",
				controller : "StatisticsController",
				controllerAs : "statsCtrl"
			}).when("/score", {
				templateUrl : "resources/partials/score.html",
				controller : "ScoreController",
				controllerAs : "scoreCtrl"
			}).otherwise({
				redirectTo : "/"
			})
		} ]);