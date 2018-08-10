module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css:{
                files: '_scss/style.scss',
                tasks: ['sass']
            }
        },
        sass: {
            options:{
                    style:'compressed'
                },
            dist: {
                files: {
                    'css/style.min.css' : '_scss/style.scss'
                }
            }
        },
        autoprefixer:{
            dist:{
                files:{
                    'build/style.css' : 'css/style.min.css'
                }
            }
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass']);
};