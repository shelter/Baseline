module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
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
                    banner: '/* scaffold2  */'
                },
                files: {
                    'dist/css/scaffold2.min.css': ['dist/css/scaffold2.css']
                }
            }
        }
    });
    grunt.registerTask('default', ['less', 'cssmin']);
};
