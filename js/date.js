
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

// Handle audio playback for mobile browsers
document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("backgroundMusic");
    var playButton = document.getElementById("playAudio");

    // Check if autoplay is blocked
    audio.play().catch(function () {
        // Show the play button if autoplay is blocked
        playButton.style.display = "block";
        playButton.addEventListener("click", function () {
            audio.play();
            playButton.style.display = "none"; // Hide the button after playing
        });
    });
});

function timer(){
	var start = new Date(2023, 4, 11, 19, 0);
	var t = new Date() - start;
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	if(h < 10){
		h = "0" + h;
	}
	var m = Math.floor(t / 1000 / 60 % 60);
	if(m < 10){
		m = "0" + m;
	}
	var s = Math.floor(t / 1000 % 60);
	if(s < 10){
		s = "0" + s;
	}
	document.getElementById("d").innerHTML = d;
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
    }
}

// Delay the fade-in by 5 seconds
setTimeout(function () {
    fadeinInterval = setInterval(fadein, 50);
}, 5000);

// Start the timer immediately
timer();
setInterval(timer, 1000);
