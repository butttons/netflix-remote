const Peer = require('simple-peer');
const io = require('socket.io-client');

const peer = new Peer({ initiator: false, trickle: false });
const socket = io('http://localhost:3030');

peer.on('signal', function(data) {
    console.log('SIGNAL', JSON.stringify(data));
});

document.querySelector('form').addEventListener('submit', function(ev) {
    ev.preventDefault();
    p.signal(JSON.parse(document.querySelector('#incoming').value));
});

p.on('connect', function() {
    console.log('CONNECT');
    p.send('whatever' + Math.random());
});

p.on('data', function(data) {
    console.log('data: ' + data);
});
const state = {
    socket: false,
    signal: false,
    peerId: false,
    remotePeer: false
};
const handler = {
    get: function() {
        return true;
    },
    set: function(obj, prop, value) {
        console.log(prop, value);
        return true;
    }
};
