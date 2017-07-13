var test = require('ava');
var path = require('path');
var execa = require('execa');

test('Grunt task works', function (t) {
	var gruntfilePath = path.join(__dirname, 'Gruntfile.js');
	console.log('<Integration>')
	return execa('grunt', ['--gruntfile', gruntfilePath, 'testee'])
		.then(function () {
			t.pass();
			console.log('</Integration>')
		});
});
