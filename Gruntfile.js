module.exports = function(grunt) {
    require('load-grunt-config')(grunt, {
        loadGruntTasks: {
            pattern: ['grunt-*', '!grunt-template-jasmine-requirejs']
        }
    });
};
