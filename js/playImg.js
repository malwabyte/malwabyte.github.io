
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
        // Display "loading" text for 5 seconds
        myTxt.innerHTML = "Loading...";
        myImage.setAttribute("src", "");

        setTimeout(function () {
            myTxt.innerHTML = ""; // Clear the "loading" text
            imageIndex = 0;
            clearInterval(showImageInterval);

            // Start showing images after the loading period
            setInterval(showImage, 10000);
        }, 5000); // 5 seconds delay
    }

	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		//setTimeout(showImage, 1000);
		setInterval(showImage, 10000);
	}
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



function event(){

	showImageInterval = setInterval(preshowImage, 100);
	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}


var showImageInterval;
var imgInterval;
var buttonInterval;

event();
