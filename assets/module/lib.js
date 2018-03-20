(exports => {

    'use strict'

    const socket = io( 'ws://localhost:3310' )
    const _private = Symbol( 'private' )

    var _room = null

    const API = Object.freeze({
        Socket: Object.freeze({
            subscribe: (name, func) => {
                socket.on(name, func)
            },
        
            publish: (name, response) => {
                socket.emit(name, response)
            },

            connect: (name, func) => {
                socket.emit( name ).on(name, func)
            }
        }),

        Room: Object.freeze({
            create: (room, func) => {
                API.Room[_private]( room )
                API.Http.post('/web', {message_type: 'create', message: {room: room}}, func)
            },

            connect: (room, func) => {
                API.Room[_private]( room )
                API.Http.post('/web', {message_type: 'connect', message: {room: room}}, func)
            },

            broadcast: (data , func) => {
                let object = Object.assign(data, {room: _room})
                API.Http.post('/web', {message_type: 'broadcast', message: object}, func)
            },

            message: ( func ) => {
                API.Socket.subscribe('message', func)
            },

            [_private]: ( room ) => {
                _room = room
                API.Socket.publish('room', room)
            }
        }),

        Http: Object.freeze({
            get: (url, func) => {
                var request = new XMLHttpRequest();
    
                request.open('get', url);
                API.Http[_private](request, func);
                request.send();
            },

            post: (url, data, func) => {
                var request = new XMLHttpRequest();
    
                request.open('post', url);
                request.setRequestHeader('Content-Type', 'application/json');

                API.Http[_private](request, func);
    
                request.send( JSON.stringify( data ) );
            },
            
            [_private]: (http, func) => {
                http.onreadystatechange = function () {
                    if ( this.readyState == 4 && this.status == 200 ) {
                        if ( func ) func( this.response )
                    }
                }
            }
        })
    })

    exports.API = API

})( this )