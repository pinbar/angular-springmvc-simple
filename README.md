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
5. Routes using ngRoute
6. Front end dependency management and build using NPM and Grunt
7. Standalone front end hosting using the connect plugin
8. JS Unit Testing 
    * Jasmine is used as the testing framework
    * Karma is used as the runner
    * karma-coverage and istanbul are used to generate coverage reports
9. End-to-End (E2E) Testing
    * Protractor is used as the testing framework
    * Protractor Runner plugin is used as the runner
    * Protractor-coverage plugin and istanbul are used to generate report (also uses inbuilt runner)
    * protractor-accessibility-plugin is used to generate an accessibility report
    * protractor-perf is used to assert response time
10. SpringMVC REST Services
11. AngularJS to REST services communication
12. Back end dependency management and build using maven 
13. In-memory jetty application server to host the REST services (& optionally the entire app)

#### How to get this code:
Clone the git repository or download the zip file and unzip it to a directory.

#### How to build, install, run:
1. Ensure that you have Java 1.8 and Maven 3 available and set up. 
    * Verify: `mvn -v`
    * This should show you: java version, java home, maven version and maven home
2. Build and install the entire application (front end, api): `mvn clean install`
3. Run the in-memory jetty application server: `mvn jetty:run`
4. Launch a web browser and point to localhost:8080/buckeyefootball (you can change the default port, if needed)

#### How to build, install, run the front end in standlone mode (separate from the REST services):
1. Ensure that you have npm, grunt-cli and karma-cli installed globally
    * Verify: `npm list -g --depth 0`
    * This should show you a list of globally installed packages
2. Install dependencies: `npm install`. See `package.json` for details.
3. Launch the front end in a server: `grunt serve` and point your web browser to localhost:9001
4. To minify/concatenate/uglify and use the "built" code to launch the server: `grunt serve_built`
5. To run JS unit tests using karma: `grunt unit`. Coverage reports can be found in /coverage/unit directory.
6. To run End to End tests using protractor: `grunt e2e`.
    * This uses the "built" code. To run with "unbuilt" code, modify the task in `/Gruntfile.js`.
    * To run with coverage report enabled: `grunt e2e_coverage`. This will use the "unbuilt" code, so that the coverage report can list individual source files. Coverage reports can be found in /coverage/e2e directory.
    * To run with performance (response times) assertions, run `grunt e2e_perf`
7. See `/Gruntfile.js` for more details on the various tasks.
8. __Note:__
    * For the standalone front end to be fully functional, the REST services have to be up and running.
    * If you have the jetty server up in the "how to" above, that should be enough for this.
