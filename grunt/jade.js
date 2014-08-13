module.exports = {
    html: {
        src: ['public/coffee/templates/**/*.jade', '!public/coffee/templates/helpers/**/*.jade'],
        dest: 'public/js/app',
        options: {
            client: false,
            pretty: true,
            basePath: 'public/coffee',
        }
    } ,
}
