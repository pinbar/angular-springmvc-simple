exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	//seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar',
  	//seleniumPort: 4444,
	framework: 'jasmine',
	getPageTimeout: 5000,
	allScriptsTimeout: 2000,
	specs: ['spec/e2e/**/*Spec.js']
}