const pg = require('pg');

const conString = "postgres://hihyvhfg:Qx3ziEyTT80qq4FK5_P7ZxCW8JrR9Izf@ruby.db.elephantsql.com:5432/hihyvhfg";
const client = new pg.Client(conString);
const StaticServer = require('static-server');

const server = new StaticServer({
    rootPath: '.',            // required, the root of the server file tree
    port: 1337,               // required, the port to listen
    name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
    host: '127.0.0.1',       // optional, defaults to any interface
    cors: '*',                // optional, defaults to undefined
    followSymlink: true,      // optional, defaults to a 404 error
    templates: {
        index: 'server.html',      // optional, defaults to 'index.html'
        //notFound: '404.html'    // optional, defaults to undefined
    }
});

server.start(function () {
    console.log('Server listening to', server.port);
    client.connect(function (err) {
        console.log('connected');
        if (err) {
            return new Error('err');
        }
        client.query('SELECT * FROM customer', function (err, result) {
            if (err) {
                return console.log(err);
            }
            console.log(result.rows);
        });
    })
});

server.on('request', function (req, res) {
});

server.on('symbolicLink', function (link, file) {
    console.log('File', link, 'is a link to', file);
});

server.on('response', function (req, res, err, file, stat) {

});