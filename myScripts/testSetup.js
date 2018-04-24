//testSetup file

//for transpiling tests to javascript
require('babel-register')();

//for tests to be able to ignore files needed for webpack config
require.extensions['.css'] = function() {};
