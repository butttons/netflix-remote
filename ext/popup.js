function qrCode(text) {
    return 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=' + text;
}
function initPeer() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { initPeer: true }, function(response) {
            document.querySelector('#status').textContent = response;
        });
    });
}
function peerDisconnected() {
    document.querySelector('#connection-status').style.display = 'none';
}
function peerConnected() {
    const status = document.querySelector('#connection-status');
    status.style.display = 'inherit';
    status.textContent = 'Connected';
    status.classList.add('connection--success');
}
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    // document.querySelector('#status').textContent = JSON.stringify(msg);
    if (Object.keys(msg).includes('peerId')) {
        document.querySelector('#qr-code').src = qrCode(msg.peerId);
    }
    if (Object.keys(msg).includes('peerConnected')) {
        document.querySelector('#qr-code').src = '';
        peerConnected();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#status').textContent = 'Loading';
    chrome.storage.local.get([ 'peerConnected' ], function(data) {
        if (!data.peerConnected) {
            initPeer();
        } else {
            document.querySelector('#status').textContent = '';
            peerConnected();
        }
    });

    document.querySelector('#refresh').addEventListener('click', function() {
        peerDisconnected();
        initPeer();
    });
    /*
    chrome.storage.local.get([ 'peerId' ], function(data) {
        document.querySelector('#status').textContent = JSON.stringify(data);
    }); */
});
