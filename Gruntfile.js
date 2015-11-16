module.exports = function (grunt) {

  grunt.initConfig({
    serve: {
      options: {
        port: 9000
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          compass: true
        },
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all']
      },
    },
    jshint: {
      options: {
      },
      all: {
        src: [
          'Gruntfile.js',
          'scripts/{,*/}*.js'
        ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'serve']);

};