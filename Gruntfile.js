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
          style: 'expanded'
        },
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      scss: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['serve', 'watch']);
//  grunt.registerTask('sass', ['sass']);

};