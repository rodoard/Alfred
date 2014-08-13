module.exports = {
    files: ['public/js/app/**/*.js', '!public/js/app/**/*min.js'],
    options: {
        globals: {
            jQuery: true,
            console: false,
            module: true,
            document: true
        }
    }
}        
