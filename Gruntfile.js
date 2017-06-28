"use strict";

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'public/stylesheets',
          outputStyle: 'compact',
          require: 'zurb-foundation'
        }
      }
    },

    watch: {
      server: {
        files: ['sass/**/*.scss'],
        tasks: ['compass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass:dev']);
};