module.exports = {
    mainJS: {
        options: {
            baseUrl: "public/js/app",
            wrap: true,
            preserveLicenseComments: false,
            optimize: "none",
            mainConfigFile: "public/js/app/config/config.js",
            include: ["init/appInit"],
            out: "public/js/app/init/appInit.min.js"
        }
    },
    mainCSS: {
        options: {
            optimizeCss: "standard",
            cssIn: "./public/css/app.css",
            out: "./public/css/app.min.css"
        }
    }
}        
