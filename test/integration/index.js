var test = require('ava');
var path = require('path');
var execa = require('execa');

test('Grunt task works', function (t) {
	var gruntfilePath = path.join(__dirname, 'Gruntfile.js');
	var args = ['--gruntfile', gruntfilePath, 'testee'];
	var options = {
		// env: {DEBUG: 'testee:*'},
		stdout: 'inherit',
		stderr: 'inherit'
	};
	return execa('grunt', args, options).then(function () {
		t.pass();
	});
});
