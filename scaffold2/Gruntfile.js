module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            default: {
                files: {
                    "dist/css/scaffold2.css": "less/scaffold2.less"
                }
            }
        },
        cssmin: {
            default: {
                options: {
                    banner: '/*!\n' +
                    ' * scaffold2 v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                    ' * <%= pkg.author %>\n' +
                    ' */\n',
                    keepSpecialComments: 0
                },
                files: {
                    'dist/css/scaffold2.min.css': ['dist/css/scaffold2.css']
                }
            }
        }
    });
    grunt.registerTask('default', ['less', 'cssmin']);
};
