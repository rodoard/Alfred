module.exports = {
    all: ['public/coffee/**/*.coffee'],
    options: {
        force: true,
        indentation: {
            level: 'ignore'
        },
        no_trailing_semicolons:  { 
            level: 'ignore'
        },
        no_trailing_whitespace: {
            level: 'ignore'
        },
        max_line_length: {
            level: 'ignore'
        }
    }
}
