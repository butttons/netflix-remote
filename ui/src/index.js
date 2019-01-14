const Peer = require('simple-peer');
const io = require('socket.io-client');
const peer = new Peer({ initiator: false, trickle: false });
const socket = io('http://localhost:3030');
const jsQR = require('jsqr');

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
        document.querySelector('#outgoing').textContent += `${prop}: ${value}\n`;
        return true;
    }
};
const stateP = new Proxy(state, handler);

socket.on('connect', () => {
    stateP.socket = socket.id;
});
socket.on('incoming-signal', (data) => {
    console.log('incoming', data);
    peer.signal(data);
});

peer.on('signal', function(data) {
    stateP.signal = data;
    const id = document.querySelector('#incoming').value;
    socket.emit('set-answer', { data, id });
});

peer.on('connect', function() {
    console.log('CONNECT');
    peer.send('whatever' + Math.random());
});

peer.on('data', function(data) {
    console.log('data: ' + data);
});

peer.on('error', function(err) {
    console.log('error', err);
});
peer.on('close', function(err) {
    console.log('close', err);
});

document.querySelector('#submit').addEventListener('click', () => {
    const id = document.querySelector('#incoming').value;
    socket.emit('get-signal', id);
});

document.querySelector('#data-submit').addEventListener('click', () => {
    const id = document.querySelector('#send-data').value;
    peer.send(id);
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.createElement('video');
    var canvasElement = document.getElementById('canvas');
    var canvas = canvasElement.getContext('2d');
    var loadingMessage = document.getElementById('loadingMessage');
    var outputContainer = document.getElementById('output');
    var outputMessage = document.getElementById('outputMessage');
    var outputData = document.getElementById('outputData');
    function drawLine(begin, end, color) {
        canvas.beginPath();
        canvas.moveTo(begin.x, begin.y);
        canvas.lineTo(end.x, end.y);
        canvas.lineWidth = 4;
        canvas.strokeStyle = color;
        canvas.stroke();
    }

    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'environment' } })
        .then(function(stream) {
            video.srcObject = stream;
            video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
            video.play();
            requestAnimationFrame(tick);
        })
        .catch((e) => {
            document.querySelector('#outgoing').textContent = e.message;
        });

    function tick() {
        loadingMessage.innerText = '⌛ Loading video...';
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            loadingMessage.hidden = true;
            canvasElement.hidden = false;
            outputContainer.hidden = false;

            canvasElement.height = video.videoHeight;
            canvasElement.width = video.videoWidth;
            canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
            var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
            var code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert'
            });
            if (code) {
                drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
                drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
                drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
                drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
                outputMessage.hidden = true;
                outputData.parentElement.hidden = false;
                outputData.innerText = code.data;
            } else {
                outputMessage.hidden = false;
                outputData.parentElement.hidden = true;
            }
        }
        requestAnimationFrame(tick);
    }
});
