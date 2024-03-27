//Get DOM elemets for JS Code

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Create function fr cicking on video / toggleVideoStatus
function toggleVideoStatus() {
   if(video.paused) {
    video.play();
   } else {
    video.pause();
   }
}

//Funtion for updating play / pause icons
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
       } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
       }
}



//Function to update progress bar
function updateProgress() {
    progress.value = (video.currentTime/video.duration) * 100;

    // Set the time for timestamp
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String (mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;

}

//Function to stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}
//Function to update the video prrogress using the bar
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}


//Eent Listeners
// Event Listener for Video Player
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress)

//Even Listener for Play Button
play.addEventListener('click', toggleVideoStatus);

//Eent Listener for Stop Button
stop.addEventListener('click', stopVideo);

//Evet Listener for Progress Bar
progress.addEventListener('change', setVideoProgress);

