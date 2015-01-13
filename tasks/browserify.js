'use strict';

module.exports = function browserify(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-browserify');

  // Options
  return {
    options: {
      transform: [ require('grunt-react').browserify ]
    },
    client: {
      src: ['react/**/*.jsx'],
      dest: 'public/scripts/react/bundle.js'
    }
  };
};
