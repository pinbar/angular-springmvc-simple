### Simple AngularJS application with SpringMVC REST services integration

#### Tech Stack/Tooling:
* AngularJS 1.4
* Grunt
* Jasmine
* Karma
* Protractor
* SpringMVC 4.2
* Maven 3
* Jetty

#### What's covered:
1. Bootstrapping the app and data binding
2. Filters and Repeaters
3. Controllers - as and $scope 
4. Modules and DI
6. Routes using ngRoute
7. Front end dependency management and build using NPM and Grunt
8. Standalone front end hosting using the connect plugin
8. JS Unit Testing using Jasmine and Karma, including coverage report using karma-coverage and istanbul
10. E2E Testing using Protractor, including coverage report using protractor-runner, protractor-coverage and istanbul
11. SpringMVC REST Services
12. AngularJS to REST api Communication
11. Back end dependency management and build using maven 
12. In memory jetty application server to host the REST api (& optionally the entire app)

#### How to get this code:
Clone the git repository or download the zip file and unzip it to a directory.

#### How to build, install, run:
1. Ensure that you have Java 1.8 and maven available and set up. 
    1. Verify: `mvn -v`
    2. This should show you java version, java home, maven version and maven home
2. Build and install the entire application (front end, api): `mvn clean install`
2. Run the in memory jetty application server: `mvn jetty:run`
3. Launch a web browser and point to localhost:8080 (you can change the default port, if needed)

#### How to build, install, run the front end (separate from the REST services):
1. Ensure that you have npm, grunt-cli and karma-cli installed globally
    1. verify: `npm list -g --depth 0`
    2. This should show you a list of gloabbly installed packages
2. Install dependencies: `npm install`. See `package.json` for details.
2. Launch the front end in a server: `grunt serve` and point your web browser to localhost:9001
3. To minify/concatenate/uglify and use the "built" code to launch the server: `grunt serve_built`
4. To run JS unit tests using karma: `grunt unit`. Coverage reports can be found in /coverage directory.
5. To run End to End tests using protractor: `grunt e2e`. This will use the "built" code to run E2E tests.
6. To run End to End tests using protractor and generate coverage report: `grunt e2e_coverage`. This will use the "unbuilt" code, so that the coverage report can list individual source files.
