#! /usr/bin/env node

'use strict';

var Hapi = require( 'hapi' );
var exec = require( 'child_process' ).exec;

var isWin = /^win/.test( process.platform );

var port = process.argv[ 2 ];
if( port === undefined ){
    port = 8888;
}
var server = new Hapi.Server();
server.connection({ port: port });

var root = process.cwd() + '/';

server.route({
    method: '*',
    path: '/{path*}',
    handler: {
        directory: {
            path: function( request ){
                console.log( ' > ' + new Date().getTime() + ' ' + request.method.toUpperCase() + ' ' + request.path );
                return root;
            },
            listing: true,
            index: [ 'index.html', 'default.html' ]
        }
    }
});

server.start( function(){
    console.log( 'Server address: http://localhost:%d', port );
    console.log( 'Server directory: %s', root );
    if( isWin ){
        exec( 'start http://localhost:' + port, function( error, stdout, stderr ){});
    }else{
        exec( 'open http://localhost:' + port, function( error, stdout, stderr ){});
    }
});
