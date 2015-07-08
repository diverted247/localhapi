var Hapi = require( 'hapi' );
var exec = require( 'child_process' ).exec;

var port = process.argv[ 2 ];
if( port == undefined ){
    port = 8888;
}
var server = new Hapi.Server();
server.connection({ port: port });

var root = process.cwd() + '/';

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: root,
            listing:true,
            index:true
        }
    }
});

server.start( function(){
    console.log( 'Server address:' , server.info.uri );
    console.log( 'Server directory:' , root );
    exec( "open http://localhost:" + port  , function( error , stdout , stderr ){
    });
});