# Debounce throttle

Repository exploring debounce and throttle methods to prevent thread blocking in JavaScript

## Development setup

This repository uses GruntJS for task automation and:

* ESLint for linting the source JavaScript files
* Babel for transpilation of ES6 to ES5
* QUnit for testing
 
Having installed the Grunt CLI you should be able to install all dependencies by running `npm nstall` from the project root. 

Once dependencies are installed the `grunt watch` task will run ESLint, Babel and QUnit in response to any changes to either a the test or source JavaScript file.
