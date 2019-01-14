function initPeer() {
    const peer = new SimplePeer({ initiator: true, trickle: false });
    const socket = io('http://localhost:3030');
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
    const stateP = new Proxy(state, handler);
    socket.on('connect', function() {
        stateP.socket = socket.id;
    });
    socket.on('answer-signal', function(data) {
        stateP.remotePeer = data;
        peer.signal(data);
    });
    socket.on('peer-id', function(data) {
        chrome.runtime.sendMessage({ peerId: data }, function(response) {
            console.log(response);
        });
        stateP.peerId = data;
    });
    peer.on('signal', function(data) {
        stateP.signal = data;
        socket.emit('peer', data);
    });
    peer.on('connect', function() {
        chrome.storage.local.set({ peerConnected: true });
        chrome.runtime.sendMessage({ peerConnected: true }, function(response) {
            console.log(response);
        });
        console.log('CONNECT');
        peer.send('whatever' + Math.random());
    });
    peer.on('data', function(data) {
        console.log('data: ' + data);
    });
    peer.on('error', function(err) {
        chrome.storage.local.set({ peerConnected: false });
        console.log('error', err);
    });
    peer.on('close', function(err) {
        chrome.storage.local.set({ peerConnected: false });
        console.log('error', err);
    });

    return peer;
}

chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    if (Object.keys(msg).includes('initPeer')) {
        chrome.storage.local.set({ peerConnected: false }, function() {
            initPeer();
        });
    }
});
window.addEventListener('load', function() {
    chrome.storage.local.set({ peerConnected: false });
});
