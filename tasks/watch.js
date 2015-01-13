'use strict';

module.exports = function watch(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-contrib-watch');

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
