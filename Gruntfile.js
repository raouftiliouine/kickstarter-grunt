module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },


    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/unprefixed-css/main-unprefixed.css': 'assets/css/main.sass'
        }
      }
    },


    autoprefixer: {
      global: {
        src: "assets/css/unprefixed-css/main-unprefixed.css",
        dest: "assets/css/main.css"
      }
    },

    express: {
        all: {
            options: {
                bases: ['D:\\Development\\portfolio'],
                port: 8080,
                hostname: "0.0.0.0",
                livereload: true
            }
        }
    },

    watch: {
      css: {
        files: 'assets/css/main.sass',
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        },
      },
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  // Default task(s).
  grunt.registerTask("default", ["sass", "autoprefixer", "express", "watch"]);
};
