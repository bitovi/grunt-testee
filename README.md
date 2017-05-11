# grunt-testee

[![Build Status](https://travis-ci.org/bitovi/grunt-testee.png?branch=master)](https://travis-ci.org/bitovi/grunt-testee)

Grunt task for [Testee](https://github.com/bitovi/testee)

## Install

```sh
npm install --save-dev grunt-testee
```

## Grunt Usage

This package comes with a [grunt](https://npmjs.com/grunt) task that extends the [configuration API](https://github.com/bitovi/testee#configuration-api):

```js
module.exports = function(grunt) {
  grunt.initConfig({
    testee: {
      options: {
        // See configuration API
      },
      coverage: {
        options: {
          // See configuration API
        },
        src: ['test/index.html']
      },
      browserstack: {
        options: {
          // See configuration API
        },
        src: ['test/index.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-testee');
};
```