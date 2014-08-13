module.exports = {
    hbs: {
        src: ['public/js/app/HBS.js'],
        overwrite:true,
        replacements: [{
            from: /\["_REPLACE_ME_"\]/g,
            to: function(match) {
                console.log(match)
                return ''
            }}
        ,
            {
                from: /return this\[.*/,
                to: function(match) {
                    console.log(match)
                    return 'return this;'
                }

            }
        ]
    }
}