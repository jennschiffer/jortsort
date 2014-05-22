module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        node: true
      },
      all: [
        'Gruntfile.js',
        'app.js',
        'public/js/*.js'
      ]
    },
    csslint: {
      all: {
        src: ['public/css/base.css']
      }
    },
    nodemon: {
      dev: {
        script: 'app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('test', ['jshint', 'csslint']);
  grunt.registerTask('run', ['nodemon','watch']);

};