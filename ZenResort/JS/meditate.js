let audio = new Audio('meditate.ogg');

let playButton = document.querySelector('button.play');
let playButtonIcon = playButton.querySelector('i');

let mouseDown = false;

playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', function() {
    playButtonIcon.className = 'ion-pause';
});

audio.addEventListener('pause', function() {
    playButtonIcon.className = 'ion-play';
});