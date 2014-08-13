// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8111),
    server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.use(express["static"](__dirname + "/../public"));

server.use(express.errorHandler({

    dumpExceptions:true,

    showStack:true

}));

server.use(server.router);


// SERVER
// ======

server.listen(port);

console.log('Welcome to Alfred!\n\nPlease go to http://localhost:' + port + ' to see the app.');