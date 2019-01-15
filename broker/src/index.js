const server = require('http').createServer();
const io = require('socket.io')(server);
const handles = require('./handles');
const { peers } = require('./db');
io.on('connection', (socket) => {
    handles.newPeer(socket.id);
    socket.on('peer', (data) => {
        const peer = handles.setSignal(socket.id, data);
        socket.emit('peer-id', peer.id);
    });
    socket.on('get-signal', (data) => {
        const signal = handles.getSignal(data);
        socket.emit('incoming-signal', signal);
    });
    socket.on('set-answer', (data) => {
        const rec = peers.getById(data.id).value();
        if (rec) {
            io.to(rec.socketId).emit('answer-signal', data.signal);
        }
    });
    socket.on('disconnect', () => {
        handles.deletePeer(socket.id);
    });
});
server.listen(process.env.PORT || 3000);
