describe("Angular Controllers", function(){
	var scoreController;

    //beforeEach(module('servicesModule'));
    beforeEach(module('controllersModule'));
	beforeEach(inject(function(_$controller_){

		$controller = _$controller_;
	}));

	describe("validate score", function() {

		it("wins should be 12", function(){
			scoreController = $controller('ScoreController', {});
			expect(scoreController.wins).toBe(12);
		});

		it("losses should be 1", function(){
			scoreController = $controller('ScoreController', {});
			expect(scoreController.losses).toBe(1);
		});
	});
});