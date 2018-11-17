var path = require('path');
var root = path.dirname(path.dirname(__dirname));

module.exports = function(grunt) {
  grunt.initConfig({
    testee: {
			tests: {
				options: {
			  	browsers: ["firefox"],
					root: root
				},
				src: ["test/integration/index.html"]
		  }
    }
  });

  grunt.loadTasks('../../tasks');
	grunt.registerTask('test', ['testee']);
};
