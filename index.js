var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('./client'));
var port = process.env.port;
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1';
var serverport = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || port;
if (process.env.OPENSHIFT_NODEJS_IP !== undefined) {
    http.listen( serverport, ipaddress, function() {
        console.log('[DEBUG] Listening on *:' + serverport);
    });
} else {
    http.listen( serverport, function() {
        console.log('[DEBUG] Listening on *:' + port);
    });
}
