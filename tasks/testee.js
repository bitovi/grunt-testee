var testee = require('testee');
var util = require('../src/util');

module.exports = function gruntTestee(grunt) {
  grunt.registerMultiTask('testee', 'Run tests', function () {
    var done = this.async();
    var options = this.options();
    var root = options.root || '';
    var browsers = options.browsers || ['phantom'];
    var files = util.testeeFiles(root, this.files(), grunt.file.expand);
    if (!files.length) {
      console.log('No files passed to Testee task.');
      return done();
    }

    testee.test(files, browsers, options).then(function () {
      done();
    }, function (error) {
      done(error);
    });
  });
};