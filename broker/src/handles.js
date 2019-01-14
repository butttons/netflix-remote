const { db, peers } = require('./db');
const handles = {
    newPeer: (socketId) => {
        const peer = peers
            .insert({
                socketId
            })
            .write();
        return peer.id;
    },
    deletePeer: (socketId) => {
        peers.remove({ socketId }).write();
    },
    setSignal: (socketId, signal) => {
        return peers.find({ socketId }).assign({ signalInit: signal }).write();
    },
    getSignal: (peerId) => {
        return peers.getById(peerId).value().signalInit;
    }
};
module.exports = handles;
