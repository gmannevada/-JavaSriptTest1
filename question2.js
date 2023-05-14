// Get the video
var video = document.getElementById("myVideo");

// Get the button
var playerbuttton = document.getElementById("playerbuttton");

//var btn = document.getElementById("mute");
//var btn = document.getElementById("volumeup");
//var btn = document.getElementById("volumedown");

// Pause and play the video, and change the button text
function PlayOrPauseVideo() {
  if (video.paused) {
    video.play();
    playerbuttton.innerHTML = "||";
  } else {
    video.pause();
    playerbuttton.innerHTML = ">";
  }
}

const backInterval = 10;
const skipInterval = 25;

function forward() {
  video.currentTime += skipInterval;
}

function backward(  ) {
  video.currentTime -= backInterval;
}    

function mute() {
  video.muted = true;
}

currentTime = document.getElementById("currentTime");

var videoProgress = document.getElementById("videoProgress");
video.addEventListener("timeupdate", function() {
  var value = (100 / video.duration) * video.currentTime;
  videoProgress.value = value;
  currentTime.innerHTML = video.currentTime;
});
  
videoProgress.addEventListener("change", function() {
  var time = video.duration * (videoProgress.value / 100);
  video.currentTime = time;
});

//-----------------------------volume----------------------------------------------
volumeRange = document.getElementById("volumeRange");
volumeRange.oninput = function(){  
  video.volume = volumeRange.value / 100;
  video.muted = false;
  if (volumeRange.value == 0) {
    video.muted = true;
  }
}

//---------------------end volume ----------------------------------------------

//-----------------------------playbackspeed----------------------------------------------
function ChangeSpeed(){
  pbSpeed = document.getElementById("playbackspeed");
  video.playbackRate = pbSpeed.value;  
  alert(" The playback speed is now: " + pbSpeed.value + "x");
}
//0.25,  0.5, 0.75, Normal, 1.25, 1.5, 1.75, 2
//---------------------end playbackspeed ----------------------------------------------
