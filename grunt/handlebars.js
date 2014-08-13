module.exports = {
  hbs: {
    options: {
      amd: ["preloader.handlebars.runtime"],
      processName: function(filename) {
        var names = filename.replace(/public\/js\/app\/(.*).html/, '$1');
        return names.split('/').slice(1).join('/')
      },
      namespace: function(filename) {
        var names = filename.replace(/public\/js\/app\/(.*).html/, '$1');
        names = names.split('/')
        return names[0];
      }
     } ,
    files: {
      'public/js/app/HBS.js' : [ 'public/js/app/templates/**/*.html'],
    }
  }
}
