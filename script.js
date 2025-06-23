progressIndicator = document.getElementById("music-progress-indicator");
playPauseIcon = document.getElementById("play-pause-icon");
song = document.getElementById("song");

song.onloadedmetadata = function(){
    progressIndicator.max = song.duration;
    song.currentTime = 0;
    progressIndicator.value = song.currentTime;
}

function playPause() {
    if(playPauseIcon.classList.contains("fa-pause")) {
        song.pause();
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
    } else {
        song.play();
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
    }
}

song.ontimeupdate = function() {
    progressIndicator.value = song.currentTime;
};

progressIndicator.onchange = function(){
    song.play();
    song.currentTime = progressIndicator.value;
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
}