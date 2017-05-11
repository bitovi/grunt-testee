const test = require('ava');
const grunt = require('grunt');
const task = require('../tasks/testee');
const util = require('../src/util');
const {
    flatten,
    testeeFiles
 } = util;

test('task should exist', t => {
    t.is(typeof task, 'function')
})

test('flatten() should collapse arrays', t => {
    t.deepEqual(flatten([1, 2, 3]), [1, 2, 3])
    t.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3])
})

test('testeeFiles() should preserve remote urls', t => {
    const files = ['https://example.com/test.html']
    t.deepEqual(testeeFiles('', files, grunt.file.expand), files)
})

test('testeeFiles() should not expand when root is a remote', t => {
    const files = ['test.html']
    const root = 'https://example.com/'
    t.deepEqual(testeeFiles(root, files, grunt.file.expand), files)
})

test('testeeFiles() should not have absolute paths', t => {
    const root = __dirname
    const files = ['index.js']
    // ^ NOTE: must be "index.js", as Grunt's expand() removes nonexistent files
    t.deepEqual(testeeFiles(root, files, grunt.file.expand), files)
})

test('testeFiles() should expand globs', t => {
    const root = __dirname
    const files = ['*.js']
    t.deepEqual(testeeFiles(root, files, grunt.file.expand), ["index.js"])
    // ^ NOTE: must be "index.js", as currently that is the only test/ file
})