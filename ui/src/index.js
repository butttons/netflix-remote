const jsQR = require('jsqr');
const Peer = require('simple-peer');
const io = require('socket.io-client');
const state = {
    isConnected: false,
    isCamera: false,
    peerId: '',
    error: {
        show: false,
        message: ''
    },
    qr: {
        output: false,
        data: false
    },
    stream: false,
    video: false,
    log: [],
    socket: false,
    peer: false,
    peerConnected: false,
    searchText: '',
    controls: [
        {
            action: 'play_video',
            icon: 'play_arrow'
        },
        {
            action: 'pause_video',
            icon: 'pause'
        },
        {
            action: 'replay_video',
            icon: 'replay_10'
        },
        {
            action: 'forward_video',
            icon: 'forward_10'
        },
        {
            action: 'fullscreen_video',
            icon: 'fullscreen'
        },
        {
            action: 'fullscreen_exit_video',
            icon: 'fullscreen_exit'
        },
        {
            action: 'next_episode',
            icon: 'fast_forward'
        }
    ]
};
const app = new Vue({
    el: '#app',
    data() {
        return state;
    },
    mounted() {
        const peer = new Peer({ initiator: false, trickle: false });
        // const socket = io('http://localhost:3030/');
        const socket = io('https://netflix-signal.herokuapp.com/');
        this.socket = socket;
        this.peer = peer;
        socket.on('connect', () => {
            console.log(socket.id);
        });
        socket.on('incoming-signal', (data) => {
            peer.signal(data);
        });
        peer.on('signal', (data) => {
            socket.emit('set-answer', { signal: data, id: this.peerId });
        });
        peer.on('connect', () => {
            this.peerConnected = true; //peer.send('whatever' + Math.random());
        });
        peer.on('data', (data) => {
            console.log('data: ', data.toString());
            this.handleIncoming(data.toString());
        });
        peer.on('error', (e) => {
            this.peerConnected = false;
            this.showError(e.message);
        });
        peer.on('close', function(err) {
            this.peerConnected = false;
        });
    },
    watch: {
        qr(newVal, oldVal) {
            this.log.push(newVal);
            if (newVal.output) {
                this.peerId = newVal.data;
            }
        }
    },
    methods: {
        sendPeer(data) {
            this.peer.send(JSON.stringify(data));
        },
        showError(message) {
            this.error.show = true;
            this.error.message = message;
        },
        scanCode() {
            const video = this.$refs.video;
            navigator.mediaDevices
                .getUserMedia({ video: { facingMode: 'environment' } })
                .then((stream) => {
                    this.stream = stream;
                    this.isCamera = true;
                    video.srcObject = stream;
                    video.setAttribute('playsinline', true);
                    video.play();
                    requestAnimationFrame(tick);
                })
                .catch((e) => {
                    this.showError(e.message);
                });
        },
        connectRemote() {
            this.socket.emit('get-signal', this.peerId);
        },
        searchNetflix() {
            this.sendPeer({
                action: 'search',
                payload: {
                    text: this.searchText
                }
            });
        },
        videoAction(action) {
            this.sendPeer({
                action: 'video_action',
                payload: {
                    action
                }
            });
        },
        handleIncoming(dataString) {
            const data = JSON.parse(dataString);
            if (Object.keys(data).includes('error')) {
                this.showError(data.error);
            }
            if (Object.keys(data).includes('success')) {
                this.error.show = false;
            }
        }
    }
});

function tick() {
    try {
        const video = app.$refs.video;
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            const canvasElement = app.$refs.canvas;
            const canvas = canvasElement.getContext('2d');
            canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
            const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert'
            });
            if (code) {
                app.stream.getTracks().forEach((track) => track.stop());
                app.isCamera = false;
                app.qr.output = true;
                app.qr.data = code.data;
                app.peerId = code.data;
            } else {
                app.qr.output = false;
                app.qr.data = '';
            }
        }
        if (!app.qr.output) {
            requestAnimationFrame(tick);
        }
    } catch (e) {
        app.error.show = true;
        app.error.message = e.message;
    }
}
