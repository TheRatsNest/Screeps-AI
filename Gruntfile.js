'use strict';

var secret = require('./Secrets.js');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    var branch = 'trnscreeps';
    if (grunt.option('branch')) {
        branch = grunt.option('branch');
    }

    grunt.initConfig({
        screeps: {
            options: {
                email: secret.email,
                password: secret.password,
                branch: branch,
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
};