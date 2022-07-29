var rotate = 0;
var scaleX = 1;
var scaleY = 1;
var Iwidth = 0;
var Iheight = 0;
var pwidth = 0;
var pheight = 0;
function printRF() {
	document.querySelector("#preview").style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
	document.getElementById('image-video').style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
	clippedVideo.style.height=pheight;
	clippedVideo.style.width=pwidth;
	console.log(pheight);
	console.log(pwidth);
}
function f_rotate() {
	rotate -= 90;
	if (rotate == -360)
		rotate = 0;
	if (rotate == -270 || rotate == -90 || rotate == 270 || rotate == 90) {
		if (pwidth >= 700) {
			pwidth = 700;
			document.getElementById("preview").firstElementChild.style.width = "700px";
			document.getElementById("width").value = pwidth;
			pheight = document.getElementById("preview").offsetHeight;
			videoContainer.setAttribute("style", "display:block; width:" + pheight + "px; height : 700px; top:" + ((746 - pwidth) / 2) + "px; left:" + ((1530 - pheight) / 2) + "px;");
			console.log("problem1")
		}
		else {
			videoContainer.setAttribute("style", "display:block; width:" + pheight + "px; height : " + pwidth + "px; top:" + ((746 - pwidth) / 2) + "px; left:" + ((1530 - pheight) / 2) + "px;");
			console.log("problem2")
		}
		clippedVideo.style.maxWidth = pwidth;
	}
	else {
		pwidth = Iwidth;
		document.getElementById("preview").firstElementChild.style.width = pwidth;
		pheight = document.getElementById("preview").offsetHeight;
		videoContainer.setAttribute("style", "display:block; width:" + pwidth + "px; height : " + pheight + "px; top:" + ((746 - pheight) / 2) + "px; left:" + ((1530 - pwidth) / 2) + "px;");
		clippedVideo.style.maxWidth = 1480;
		console.log("problem3")
	}
	printRF();
}
function f_rotate_r() {
	rotate += 90;
	if (rotate == 360)
		rotate = 0;
	if (rotate == 270 || rotate == 90 || rotate == -270 || rotate == -90) {
		if (pwidth >= 700) {
			pwidth = 700;
			document.getElementById("preview").firstElementChild.style.width = "700px";
			document.getElementById("width").value = pwidth;
			clippedVideo.style.maxWidth = pheight;
			videoContainer.setAttribute("style", "display:block; width:" + pheight + "px; height : 700 px; top:" + ((746 - pwidth) / 2) + "px; left:" + ((1530 - pheight) / 2) + "px;");
		}
		else {
			videoContainer.setAttribute("style", "display:block; width:" + pheight + "px; height : " + pwidth + "px; top:" + ((746 - pwidth) / 2) + "px; left:" + ((1530 - pheight) / 2) + "px;");
			clippedVideo.style.maxWidth = pwidth;
		}
	}
	else {
		pwidth = Iwidth;
		document.getElementById("preview").firstElementChild.style.width = pwidth;
		videoContainer.setAttribute("style", "display:block; width:" + pwidth + "px; height : " + pheight + "px; top:" + ((746 - pheight) / 2) + "px; left:" + ((1530 - pwidth) / 2) + "px;");
		clippedVideo.style.maxWidth = 1480;
	}
	printRF();
}
function f_flip_h() {
	if (scaleX == 1)
		scaleX = -1;
	else
		scaleX = 1;
	printRF();
}
function f_flip_v() {
	if (scaleY == 1)
		scaleY = -1;
	else
		scaleY = 1;
	printRF();
}


var grayscale = 0;
var speia = 0;
var invert = 0;
var brightness = 0
var contrast = 0;
function printFF() {
	document.querySelector("#preview").style.filter = "grayscale(" + grayscale + "%) sepia(" + speia + "%) invert(" + invert * 100 + "%) brightness(" + (parseInt(brightness) + 100) + "%) contrast(" + (parseInt(contrast) + 100) + "%)";
}
function rangeSlide1(value) {
	document.getElementById('rangeValue1').innerHTML = value;
	grayscale = value;
	printFF();
}
function rangeSlide2(value) {
	document.getElementById('rangeValue2').innerHTML = value;
	speia = value;
	printFF();
}
function rangeSlide3(value) {
	document.getElementById('rangeValue3').innerHTML = value;
	invert = value;
	printFF();
}
function rangeSlide4(value) {
	document.getElementById('rangeValue4').innerHTML = value;
	brightness = value;
	printFF();
}
function rangeSlide5(value) {
	document.getElementById('rangeValue5').innerHTML = value;
	contrast = value;
	printFF();
}


function widthChange(value) {
	if (document.getElementById("width").value.length == 0 || document.getElementById("width").value == 0)
		pwidth = Iwidth;
	else if (document.getElementById("width").value > 1480) {
		if (rotate == 0 || rotate == 180 || rotate == -180)
			pwidth = 1480;
		else
			pwidth = 700;
	}
	else if (document.getElementById("width").value < 300)
		pwidth = 300;
	else
		pwidth = value;
	document.getElementById("preview").firstElementChild.style.width = "" + pwidth + "px";
	document.getElementById("preview").firstElementChild.style.height = "" + pheight + "px";
	videoContainer.setAttribute("style", "display:block; width:" + pwidth + "px; height : " + pheight + "px; top:" + ((746 - pheight) / 2) + "px; left:" + ((1530 - pwidth) / 2) + "px;");
}
function heightChange(value) {
	if (document.getElementById("height").value.length == 0 || document.getElementById("height").value == 0)
		pheight = Iheight;
	else if (document.getElementById("height").value > 700) {
		if (rotate == 0 || rotate == 180 || rotate == -180)
			pheight = 700;
		else
			pheight = 1480;
	}
	else if (document.getElementById("height").value < 300)
		pheight = 300;
	else
		pheight = value;
	document.getElementById("preview").firstElementChild.style.height = "" + pheight + "px";
	document.getElementById("preview").firstElementChild.style.width = "" + pwidth + "px";
	videoContainer.setAttribute("style", "display:block; width:" + pwidth + "px; height : " + pheight + "px; top:" + ((746 - pheight) / 2) + "px; left:" + ((1530 - pwidth) / 2) + "px;");
}



var videoContainer,
	videoClipper,
	clippedVideo;
function dragNdrop(event) {
	var filename = URL.createObjectURL(event.target.files[0]);
	var preview = document.getElementById('preview');
	var previewImg = document.createElement("img");
	previewImg.setAttribute("src", filename);
	previewImg.setAttribute("id", "image1");
	preview.innerHTML = "";
	preview.appendChild(previewImg);
	document.getElementById('dragBox').style.display = 'none';
	previewImg.onload = function () {
		if (previewImg.width < 300)
			previewImg.width = 300;
		if (previewImg.height < 300)
			previewImg.height = 300;
		Iwidth = previewImg.width;
		pwidth = Iwidth;
		Iheight = previewImg.height;
		pheight = Iheight;
		document.getElementById("height").value = pheight;
		document.getElementById("width").value = pwidth;


		videoContainer = document.getElementById("video-compare-container"),
			videoClipper = document.getElementById("video-clipper"),
			clippedVideo = videoClipper.getElementsByTagName("img")[0];
		videoContainer.setAttribute("style", "display:block; width:" + pwidth + "px; height : " + pheight + "px; top:" + ((746 - pheight) / 2) + "px; left:" + ((1530 - pwidth) / 2) + "px;");

		videoClipper.getElementsByTagName("img")[0].src = filename;
		videoContainer.addEventListener("mousemove", trackLocation, false);
		videoContainer.addEventListener("touchstart", trackLocation, false);
		videoContainer.addEventListener("touchmove", trackLocation, false);
	}
}
function drag() {
	document.getElementById('uploadFile').parentNode.className = "draging dragBox";
}
function drop() {
	document.getElementById('uploadFile').parentNode.className = 'dragBox';
}


function canvasf(el) {
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	canvas.height = pheight;
	canvas.width = pwidth;
	var rwidth = pwidth;
	var rheight = pheight;
	if (rotate == 90 || rotate == -270) {
		canvas.height = rwidth;
		canvas.width = rheight;
		ctx.setTransform(
			0, 1,    // x axis down the screen
			-1, 0,   // y axis across the screen from right to left
			rheight, // x origin is on the right side of the canvas 
			0        // y origin is at the top
		);
		var temp = scaleX;
		scaleX = scaleY;
		scaleY = temp;
	}
	else if (rotate == 180 || rotate == -180) {
		ctx.setTransform(
			-1, 0,    // x axis down the screen
			0, -1,   // y axis across the screen from right to left
			rwidth, // x origin is on the right side of the canvas 
			rheight        // y origin is at the top
		);

	}
	else if (rotate == 270 || rotate == -90) {
		canvas.height = rwidth;
		canvas.width = rheight;
		ctx.setTransform(
			0, -1,    // x axis down the screen
			1, 0,   // y axis across the screen from right to left
			0, // x origin is on the right side of the canvas 
			rwidth        // y origin is at the top
		);
		var temp = scaleX;
		scaleX = scaleY;
		scaleY = temp;
	}
	var flipwidth = 0;
	var flipheight = 0;
	if (scaleX == -1)
		flipwidth = -pwidth;
	if (scaleY == -1)
		flipheight = -pheight;
	ctx.scale(scaleX, scaleY);

	ctx.filter = "grayscale(" + grayscale + "%) sepia(" + speia + "%) invert(" + invert * 100 + "%) brightness(" + (parseInt(brightness) + 100) + "%) contrast(" + (parseInt(contrast) + 100) + "%)";
	ctx.drawImage(document.getElementById('image1'), flipwidth, flipheight, rwidth, rheight);
	var dt = canvas.toDataURL('image/jpg');
	el.href = dt;
};


function trackLocation(e) {
	var rect = videoContainer.getBoundingClientRect(),
		position = ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
	if (position <= 100) {
		if (position > 99.6)
			position = 100;
		if (rotate == 180 || rotate == -180) {
			videoClipper.style.width = position + "%";
			clippedVideo.style.width = ((100 / position) * 100) + "%";
		}
		else if (rotate == 0) {
			videoClipper.style.width = position + "%";
			clippedVideo.style.width = ((100 / position) * 100) + "%";
		}
		else if (rotate == 90 || rotate == -270) {
			videoClipper.style.width = position + "%";
			clippedVideo.style.height = ((100 / position) * 100) + "%";
		}
		else {
			videoClipper.style.width = position + "%";
			clippedVideo.style.height = ((100 / position) * 100) + "%";
		}
		clippedVideo.style.zIndex = 3;
	}
}