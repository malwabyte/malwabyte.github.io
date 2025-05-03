
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
    if (t == 0) {
        var loadingSpinner = document.getElementById("loadingSpinner");
        loadingSpinner.style.display = "block"; // Show the spinner when the heart is clicked

        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);

        // Start loading images after a short delay
        setTimeout(function () {
            loadingSpinner.style.display = "none"; // Hide the spinner before starting the slideshow
            setInterval(showImage, 10000); // Change image every 10 seconds
        }, 500); // Simulated delay before starting the slideshow
    }

    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
    t++;
}

function preshowImage() {
    if (t > 0) { // Ensure this only runs after play() is triggered
        var loadingSpinner = document.getElementById("loadingSpinner");
        loadingSpinner.style.display = "block"; // Show the spinner

        // Simulate image loading
        setTimeout(function () {
            document.getElementById("imgTxt").style.opacity = 0;
            myImage.setAttribute("src", imageArray[imageIndex]);
            myTxt.innerHTML = txtArray[imageIndex];
            imageIndex++;
            if (imageIndex >= len) {
                imageIndex = 0;
            }
            loadingSpinner.style.display = "none"; // Hide the spinner after loading
        }, 500); // Simulated loading time
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
