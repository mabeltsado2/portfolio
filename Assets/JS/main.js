//Change Description
function mousepress(obj) {
	obj.style.color = 'darkblue'
	obj.innerHTML = "The coolest person EVER!";
}

//Change image when you hover
function changeImg() {
	document.getElementById("home-image").src ="../Assignment-8/Assets/Images/selfie.png";
}

//Change image back
function changeImgBack () {
    document.getElementById("home-image").src ="../Assignment-8/Assets/Images/home-image.png";
}



