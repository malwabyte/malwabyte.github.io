var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
	//document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	//document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function play() {
    var audio = document.getElementById("backgroundMusic");

    // Attempt to play the audio
    audio.play().catch(function (error) {
        console.log("Autoplay blocked. User interaction required to play audio.");
    });

    if (t == 0) {
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);

        // Display the first image immediately
        showImage();

        // Start the interval to display subsequent images
        setInterval(showImage, 10000);
    }

    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;

    t++;
}

function preshowImage(){
 
	document.getElementById("imgTxt").style.opacity = 0;
 
	myImage.setAttribute("src", imageArray[imageIndex]);
 
	myTxt.innerHTML = txtArray[imageIndex];
 
	imageIndex++;
 
	if(imageIndex >= len){
 
		imageIndex = 0;
 
	}
 
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event() {
    // Start showing images after preloading is complete
    showImageInterval = setInterval(preshowImage, 100);

    // Delay the heart button fade-in by 5 seconds after images are loaded
    setTimeout(function () {
        buttonInterval = setInterval(buttonFadeIn, 50);
    }, 5000); // 5 seconds delay
}

function preloadImages(imageArray, callback) {
    let loadedImages = 0;
    const totalImages = imageArray.length;

    imageArray.forEach(function (src) {
        const img = new Image();
        img.src = src;

        // Increment the counter when an image is loaded
        img.onload = function () {
            loadedImages++;
            if (loadedImages === totalImages) {
                // All images are loaded, call the callback
                callback();
            }
        };

        // Handle errors (optional)
        img.onerror = function () {
            console.error(`Failed to load image: ${src}`);
            loadedImages++;
            if (loadedImages === totalImages) {
                callback();
            }
        };
    });
}


var showImageInterval;
var imgInterval;
var buttonInterval;

event();

