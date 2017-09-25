/* JavaScript code */

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

const cameraId = "camsource"

window.addEventListener('DOMContentLoaded', function() {

    const video = document.getElementById(cameraId);
    const constraints = {
        audio: false,
        video: {facingMode: 'rear'}
    };

    if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => video.srcObject = stream)
            .catch(console.error);
    }
    else {
        $("#qr-value").text('Sorry, native web camera streaming (getUserMedia) is not supported by this browser...')
        return;
    }
}, false);

$(document).ready(function() {
    if (!navigator.getUserMedia) return;
    cam = camera(cameraId);
    cam.start()
})