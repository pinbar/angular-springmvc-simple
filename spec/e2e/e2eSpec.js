describe("Angular E2E Tests: ", function(){
	
	beforeEach(function(){
		browser.get(browser.baseUrl);
	});

	it("should have title", function(){
		expect(browser.getTitle()).toEqual("Simple AngularJS App");
	});

	describe("score: ", function(){

		it("wins should be 12", function(){
			element(by.id('scoreLink')).click();
			expect(element(by.id('scoreWins')).getText()).toEqual('Wins: 12');
			expect(element(by.binding('scoreCtrl.losses')).getText()).toEqual('1');
		});
	});

	describe("info: ", function(){
		
		beforeEach(function(){
			element(by.id('infoLink')).click();
		});
		
		it("name should be Pinak", function(){
			expect(element(by.id('playerName')).getText()).toEqual('Name: Pinak Barve');
		});

		it("name should be JT", function(){
			element(by.id('getRealBtn')).click();
			expect(element(by.id('playerName')).getText()).toEqual('Name: JT Barrett');
		});
	});
});