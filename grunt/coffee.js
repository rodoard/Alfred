module.exports = {
    tests: {
        files: [ {
            expand: true,
            cwd: 'public/coffee',
            src: ['jasmine/**/*.coffee'],
            dest: 'public/js/',
            ext: '.js'
        } ]
    },
    glob_to_multiple: {
        expand: true,
        options: {
            bare: true
        },
        cwd: 'public/coffee',
        src: ['**/*.coffee', '!jasmine/**/*.coffee'],
        dest: 'public/js/app',
        ext: '.js'
    }
}
