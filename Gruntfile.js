'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mochacli: {
      options: {
        reporter: 'spec'
      },
      all: {
        src: ['test/build/*.js'] 
      }
    },
    fileConfig: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: 'test/src/**/*.coffee'
      },
      source: {
        src: 'source/**/*.coffee'
      }
    },
    coffee: {
      sourceToLib: {
        expand: true,
        flatten: true,
        cwd: 'source',
        src: ['*.coffee'],
        dest: 'lib',
        ext: '.js'
      },
      testSourceToBuild: {
        expand: true,
        flatten: true,
        cwd: 'test/src',
        src: ['*.coffee'],
        dest: 'test/build',
        ext: '.js'
      }
    },
    watch: {
      test: {
        files: ['<%= fileConfig.test.src %>', '<%= fileConfig.source.src%>'],
        tasks: ['coffee', 'mochacli']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-cli');

  // Default task.
  grunt.registerTask('test', ['mochacli']);

};
