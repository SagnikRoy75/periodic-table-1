module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            basic: {
                src: [
                    'js/ajax.js',
                    'js/responsive-nav.js',
                    'js/simple_tabs.js',
                    'js/element.js',
                    'js/default.js'
                ],
                dest: 'dist/js/default.concat.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/js/default.concat.js',
                dest: 'dist/js/default.min.js'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images',
                    flatten: true,
                    src: ['*.{png,jpg,jpeg,gif}'],
                    dest: 'images/build'
                }]
            }
        },
        watch: {
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
                options: {
                    livereload: true,
                },
            },
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin']);

};
