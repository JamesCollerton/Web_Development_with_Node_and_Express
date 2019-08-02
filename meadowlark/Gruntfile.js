module.exports = function (grunt) {
    // load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    });
    // configure plugins
    grunt.initConfig({
        cafemocha: {
            all: { src: 'public/qa/tests-unit.js', options: { ui: 'tdd' }, }
        },
        jshint: {
            app: ['meadowlark.js', 'lib/**/*.js', 'routes/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js'],
            options:{
                jshintrc: '.jshintrc'
            }
        },
        exec: {
            linkchecker: { cmd: 'echo "Link checker should be here' }
        },
    });
    // register tasks
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};
