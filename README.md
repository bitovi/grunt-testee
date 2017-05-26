# grunt-testee

> Grunt task for [Testee](https://github.com/bitovi/testee)

[![npm](https://img.shields.io/npm/v/grunt-testee.svg)](https://www.npmjs.com/package/grunt-testee)
[![Build Status](https://travis-ci.org/bitovi/grunt-testee.svg?branch=master)](https://travis-ci.org/bitovi/grunt-testee)
[![Greenkeeper badge](https://badges.greenkeeper.io/bitovi/grunt-testee.svg)](https://greenkeeper.io/)

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