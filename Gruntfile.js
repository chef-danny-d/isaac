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
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 4 versions'}), // add vendor prefixes
                    //require('cssnano')() // minify the result //not needed rn since sass is already doing that 
                ]
            },
            dist: {
                src: 'css/style.min.css'
            }
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-ts');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass']);
};
