module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            compile: {
                files: {
                    'app/css/common.css': 'app/css/common.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'app/css/common.css': 'app/css/common.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['app/css/common.scss'],
                tasks: ['sass','autoprefixer']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('build', ['sass', 'autoprefixer']);

};