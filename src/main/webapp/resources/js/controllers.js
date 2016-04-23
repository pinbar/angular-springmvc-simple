angular.module("controllersModule", ["servicesModule"])
.controller("PlayerController", ["PlayerService", function(PlayerService){
	
	var vm = this;
	vm.firstName = "Pin";
	vm.lastName = "Bar";
	vm.errorCode;
	
	//(
	vm.getPlayer = function(){
		PlayerService.getPlayerInfo()
		.success(function(res) {
			vm.firstName = res.firstName;
			vm.lastName = res.lastName;
		})
		.error(function(err, status){
			vm.errorCode = "HTTP error code: "+ status;
		});

	}
	//)();
}])
.controller("StatisticsController", ["PlayerService", function(PlayerService){
	
	var vm = this;
	vm.errorCode;
	
	(
	function getStatistics(){
		PlayerService.getStatistics()
		
		// .success(function(res) {
		// 	vm.passYards = res.passingYards;
		// 	vm.rushYards = res.rushingYards;
		// })
		// .error(function(err, status){
		// 	vm.errorCode = "HTTP error code: "+ status;
		// });

		.then(
			function(res){
				vm.passYards = res.data.passingYards;
				vm.rushYards = res.data.rushingYards;
			},
			function(res){
				vm.errorCode = "An error occurred: status code: "+ res.status + ": " + res.statusText;
				console.log("in err");
			}
		);

	}
	)();
}])
.controller("ScoreController", function ScoreController(){
	
	this.wins = 12;
	this.losses = 1;
});

