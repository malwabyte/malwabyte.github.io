
let i = 0;
let text1 = "Hello Aiaa.";
let text2 = "Today marks the completion of our 2nd year together as husband and wife. <br> These two years have been filled with countless memories and happiness. <br> I am so grateful to have you by my side, and I look forward to many more years of happiness together with you. <br> You have always been a great support in my life and I always want to make sure you are safe and happy. <br> Happy Anniversary my dear wife, I love you :)";
let speed = 100;

function typeWriter(text, para) {
    if (ok == 2) {
        clearInterval(typeInterval);
    }
    if (i < text.length) {
        // Append the next character or HTML tag
        let currentChar = text.charAt(i);
        if (currentChar === "<") {
            // Handle HTML tags like <br>
            let tag = "";
            while (i < text.length && text.charAt(i) !== ">") {
                tag += text.charAt(i);
                i++;
            }
            tag += ">"; // Add the closing ">"
            document.getElementById(para).innerHTML += tag;
        } else {
            document.getElementById(para).innerHTML += currentChar;
        }
        i++;
        speed = Math.random() * 50 + 100;
    } else {
        if (ok == 0) {
            i = 0;
        }
        ok += 1;
    }
}
var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
