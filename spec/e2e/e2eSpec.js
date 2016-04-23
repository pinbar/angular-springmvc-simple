var PerfRunner = require('protractor-perf');

describe("Angular E2E Tests: ", function(){
	
	var perfRunner = new PerfRunner(protractor, browser);

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
		
		it("name should be PinBar", function(){
			expect(element(by.id('playerName')).getText()).toEqual('Name: Pin Bar');
		});
		it("name should be JT Barrett", function(){
			perfRunner.start();
	
			element(by.id('getRealBtn')).click();
			expect(element(by.id('playerName')).getText()).toEqual('Name: JT Barrett');
	
			perfRunner.stop();
	
			if (perfRunner.isEnabled) {
				//perfRunner.printStats();
				//to see a failure, set to < 1 or increase the service time simulation in the controller
				expect(perfRunner.getStats('requestTime')).toBeLessThan(2);
			};

		});
	});
});