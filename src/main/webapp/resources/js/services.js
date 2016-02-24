angular.module("servicesModule", [])
.service("PlayerService", ["$http", "$rootScope", function($http, $rootScope) {
	
	$rootScope.baseUrl = "http://localhost:8080/buckeyefootball/rest";
	
	this.getPlayerInfo = function() {
		return $http.get($rootScope.baseUrl + "/players/qb");
	}
	
	this.getStatistics = function() {
		return $http.get($rootScope.baseUrl + "/players/stats");
	}

	function sleepFor(sleepDuration) {
    	var now = new Date().getTime();
    	while(new Date().getTime() < now + sleepDuration) {
    		/* do nothing */ 
    	} 
	}
}]);