var rotate = 0;
var scaleX = 1;
var scaleY = 1;
var Iwidth = 0; //Original image width and height
var Iheight = 0;
var uwidth = 0; //User modified image width and height
var uheight = 0;
var pwidth = 0; //Previewed image width and height
var pheight = 0;

function reset() {
	/*--------------------------------------------------  resets all attributes -------------------------------------------------- */
	rotate = 0, scaleX = 1, scaleY = 1, Iwidth = 0, Iheight = 0, pwidth = 0, pheight = 0;
	grayscale = 0, speia = 0, invert = 0, brightness = 0, contrast = 0;
	document.getElementById('rangeValue1').innerHTML = 0;
	document.getElementById('rangeValue2').innerHTML = 0;
	document.getElementById('rangeValue3').innerHTML = 0;
	document.getElementById('rangeValue4').innerHTML = 0;
	document.getElementById('rangeValue5').innerHTML = 0;
	document.getElementById("range1").value = "0";
	document.getElementById("range2").value = "0";
	document.getElementById("range3").value = "0";
	document.getElementById("range4").value = "0";
	document.getElementById("range5").value = "0";
	videoContainer.style.width = 0 + "px";
	videoContainer.style.height = 0 + "px";
	clippedVideo.style.top = 0 + "px";
	clippedVideo.style.left = 0 + "px";
	document.querySelector("#preview").style.top = 0;
	document.querySelector("#preview").style.left = 0;
	document.querySelector("#preview").style.filter = "grayscale(" + grayscale + "%) sepia(" + speia + "%) invert(" + invert * 100 + "%) brightness(" + (parseInt(brightness) + 100) + "%) contrast(" + (parseInt(contrast) + 100) + "%)";
	document.querySelector("#preview").style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
}

function printRF() {
	/*--------------------------------------------------  applies rotations and flips styles -------------------------------------------------- */
	document.querySelector("#preview").firstElementChild.style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
	document.getElementById('image-video').style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
	videoContainer.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
	videoClipper.setAttribute("style", "width: 0px; height : " + pheight + "px;");
	var first2Str, first2Num;
	first2Str = String(pwidth).slice(0, 4);
	if (pwidth < 1000)
		first2Str = String(pwidth).slice(0, 3);
	first2Num = Number(first2Str);
	document.getElementById("width").value = first2Str;
	first2Str = String(pheight).slice(0, 3);
	first2Num = Number(first2Str);
	document.getElementById("height").value = first2Str;
}

function positionPics() {
	clippedVideo.style.top = 0;
	clippedVideo.style.left = 0;
	document.querySelector("#preview").firstElementChild.style.top = 0;
	document.querySelector("#preview").firstElementChild.style.left = 0;
	var rect1 = videoContainer.getBoundingClientRect();
	var rect2 = clippedVideo.getBoundingClientRect();
	var rect3 = document.querySelector("#preview").firstElementChild.getBoundingClientRect();
	if (Math.abs(rotate) == 270 || Math.abs(rotate) == 90) {
		document.querySelector("#preview").firstElementChild.style.top = (rect1.top - rect3.top) + "px";
		document.querySelector("#preview").firstElementChild.style.left = (rect1.left - rect3.left) + "px";
		clippedVideo.style.top = (rect1.top - rect2.top) + "px";
		clippedVideo.style.left = (rect1.left - rect2.left) + "px";
	}
	else {
		document.querySelector("#preview").firstElementChild.style.top = 0 + "px";
		document.querySelector("#preview").firstElementChild.style.left = 0 + "px";
		clippedVideo.style.top = 0 + "px";
		clippedVideo.style.left = 0 + "px";
	}
}

function rotateR(rotate) {
	/*--------------------------------------------------  applies rotations into images and their containers -------------------------------------------------- */
	if (Math.abs(rotate) == 360)
		rotate = 0;
	this.rotate = rotate;
	if (Math.abs(rotate) == 270 || Math.abs(rotate) == 90) {
		if (pwidth > 700) {
			pwidth = 700 * (pheight / pwidth);
			pheight = 700;
		}
		else {
			var temp = pheight;
			pheight = pwidth;
			pwidth = temp;
		}
		document.getElementById('image-video').style.height = pwidth;
		document.getElementById('image-video').style.width = pheight;
		document.getElementById('image1').style.height = pwidth;
		document.getElementById('image1').style.width = pheight;
		document.querySelector("#preview").style.height = "" + pheight + "px";
		document.querySelector("#preview").style.width = "" + pwidth + "px";
	}
	else {
		pheight = uheight;
		pwidth = uwidth;
		document.getElementById('image-video').style.height = pheight;
		document.getElementById('image-video').style.width = pwidth;
		document.getElementById('image1').style.height = pheight;
		document.getElementById('image1').style.width = pwidth;
		document.querySelector("#preview").style.height = "" + pheight + "px";
		document.querySelector("#preview").style.width = "" + pwidth + "px";
	}

	printRF();
	positionPics();
}

function f_rotate() {
	/*--------------------------------------------------  Rotate to the right -------------------------------------------------- */
	if (document.getElementById('image1') == null)
		alert("Please Upload A Picture");
	else {
		rotate += 90;
		rotateR(rotate);
	}
}
function f_rotate_r() {
	/*--------------------------------------------------  Rotate to the left -------------------------------------------------- */
	if (document.getElementById('image1') == null)
		alert("Please Upload A Picture");
	else {
		rotate -= 90;
		rotateR(rotate);
	}
}
function f_flip_h() {
	/*--------------------------------------------------  Flip Horizontally -------------------------------------------------- */	if (document.getElementById('image1') == null)
		alert("Please Upload A Picture");
	else {
		if (scaleX == 1)
			scaleX = -1;
		else
			scaleX = 1;
		document.querySelector("#preview").firstElementChild.style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
		document.getElementById('image-video').style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
	}
}
function f_flip_v() {
	/*--------------------------------------------------  Flip Vertically -------------------------------------------------- */
	if (document.getElementById('image1') == null)
		alert("Please Upload A Picture");
	else {
		if (scaleY == 1)
			scaleY = -1;
		else
			scaleY = 1;
		document.querySelector("#preview").firstElementChild.style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
		document.getElementById('image-video').style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
	}
}

var grayscale = 0;
var speia = 0;
var invert = 0;
var brightness = 0
var contrast = 0;
function printFF() {
	/*--------------------------------------------------  applies styles -------------------------------------------------- */
	document.querySelector("#preview").style.filter = "grayscale(" + grayscale + "%) sepia(" + speia + "%) invert(" + invert * 100 + "%) brightness(" + (parseInt(brightness) + 100) + "%) contrast(" + (parseInt(contrast) + 100) + "%)";
}
function rangeSlide1(value) {
	if (document.getElementById('image1') == null) {
		alert("Please Upload A Picture");
		document.getElementById('range1').value = 0;
	}
	else {
		document.getElementById('rangeValue1').innerHTML = value;
		grayscale = value;
		printFF();
	}
}
function rangeSlide2(value) {
	if (document.getElementById('image1') == null) {
		alert("Please Upload A Picture");
		document.getElementById('range2').value = 0;
	}
	else {
		document.getElementById('rangeValue2').innerHTML = value;
		speia = value;
		printFF();
	}
}
function rangeSlide3(value) {
	if (document.getElementById('image1') == null) {
		alert("Please Upload A Picture");
		document.getElementById('range3').value = 0;
	}
	else {
		document.getElementById('rangeValue3').innerHTML = value;
		invert = value;
		printFF();
	}
}
function rangeSlide4(value) {
	if (document.getElementById('image1') == null) {
		alert("Please Upload A Picture");
		document.getElementById('range4').value = 0;
	}
	else {
		document.getElementById('rangeValue4').innerHTML = value;
		brightness = value;
		printFF();
	}
}
function rangeSlide5(value) {
	if (document.getElementById('image1') == null) {
		alert("Please Upload A Picture");
		document.getElementById('range5').value = 0;
	}
	else {
		document.getElementById('rangeValue5').innerHTML = value;
		contrast = value;
		printFF();
	}
}


function isNumber(evt) {
	/*--------------------------------------------------  Checks if width and Height attributes are only numbers -------------------------------------------------- */
	if (document.getElementById('image1') == null) {
		alert("Please Upload A Picture");
		return false
	}
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	else if (evt.keyCode == 13 && !evt.shiftKey) {
		evt.preventDefault();
	}
	return true;
}

function FocusOut() {
	document.getElementById("width").value = pwidth;
	document.getElementById("height").value = pheight;
}
function widthChange(value) {
	if (document.getElementById("width").value.length == 0 || document.getElementById("width").value == 0)
		pwidth = Iwidth;
	else if (document.getElementById("width").value > 1480 && (rotate == 0 || Math.abs(rotate) == 180))
		pwidth = 1480;
	else if (document.getElementById("width").value > 700 && (Math.abs(rotate) == 90 || Math.abs(rotate) == 270))
		pwidth = 700;
	else if (document.getElementById("width").value < 300)
		pwidth = 300;
	else
		pwidth = value;
	if (Math.abs(rotate) == 270 || Math.abs(rotate) == 90) {
		console.log("problem1!!!!!");
		videoContainer.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		videoClipper.setAttribute("style", "width: 0px; height : " + pheight + "px;");
		document.querySelector("#preview").style.height = "" + pheight + "px";
		document.querySelector("#preview").style.width = "" + pwidth + "px";
		document.getElementById('image1').style.height = pwidth;
		document.getElementById('image1').style.width = pheight;
		document.getElementById('image-video').style.height = pwidth;
		document.getElementById('image-video').style.width = pheight;
		positionPics();
	}
	else {
		console.log("problem2!!!!!");
		videoContainer.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		videoClipper.setAttribute("style", "width: 0px; height : " + pheight + "px;");
		document.querySelector("#preview").style.height = "" + pheight + "px";
		document.querySelector("#preview").style.width = "" + pwidth + "px";
		document.getElementById('image1').style.height = pheight;
		document.getElementById('image1').style.width = pwidth;
		document.getElementById('image-video').style.height = pheight;
		document.getElementById('image-video').style.width = pwidth;
		positionPics();
	}
	uwidth = pwidth;
	uheight = pheight;
}

function heightChange(value) {
	if (document.getElementById("height").value.length == 0 || document.getElementById("height").value == 0)
		pheight = Iheight;
	else if (document.getElementById("height").value > 700 && (rotate == 0 || Math.abs(rotate) == 180))
		pheight = 700;
	else if (document.getElementById("height").value > 1480 && (Math.abs(rotate) == 90 || Math.abs(rotate) == 270))
		pheight = 1480;
	else if (document.getElementById("height").value < 300)
		pheight = 300;
	else
		pheight = value;
	if (Math.abs(rotate) == 270 || Math.abs(rotate) == 90) {
		console.log("problem1!!!!!");
		videoContainer.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		videoClipper.setAttribute("style", "width: 0px; height : " + pheight + "px;");
		document.querySelector("#preview").style.height = "" + pheight + "px";
		document.querySelector("#preview").style.width = "" + pwidth + "px";
		document.getElementById('image1').style.height = pwidth;
		document.getElementById('image1').style.width = pheight;
		document.getElementById('image-video').style.height = pwidth;
		document.getElementById('image-video').style.width = pheight;
		positionPics();
	}
	else {
		console.log("problem2!!!!!");
		videoContainer.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		videoClipper.setAttribute("style", "width: 0px; height : " + pheight + "px;");
		document.querySelector("#preview").style.height = "" + pheight + "px";
		document.querySelector("#preview").style.width = "" + pwidth + "px";
		document.getElementById('image1').style.height = pheight;
		document.getElementById('image1').style.width = pwidth;
		document.getElementById('image-video').style.height = pheight;
		document.getElementById('image-video').style.width = pwidth;
		positionPics();
	}
	uwidth = pwidth;
	uheight = pheight;
}

/*--------------------------------------------------  Uploading An Image -------------------------------------------------- */
var videoContainer,
	videoClipper,
	clippedVideo;
function dragNdrop(event) {
	var filename = URL.createObjectURL(event.target.files[0]);
	var preview = document.querySelector("#preview");
	var previewImg = document.createElement("img");
	previewImg.setAttribute("src", filename);
	previewImg.setAttribute("id", "image1");
	preview.innerHTML = "";
	preview.appendChild(previewImg);
	document.getElementById('dragBox').style.display = 'none';
	previewImg.onload = function () {

		videoContainer = document.getElementById("video-compare-container"),
			videoClipper = document.getElementById("video-clipper"),
			clippedVideo = videoClipper.getElementsByTagName("img")[0];
		videoContainer.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		videoClipper.getElementsByTagName("img")[0].src = filename;
		videoContainer.addEventListener("mousemove", trackLocation, false);
		videoContainer.addEventListener("touchstart", trackLocation, false);
		videoContainer.addEventListener("touchmove", trackLocation, false);
		reset();
		if (previewImg.width < 300)
			previewImg.width = 300;
		if (previewImg.height < 300)
			previewImg.height = 300;
		if (previewImg.width > 1480)
			previewImg.width = 1400;
		if (previewImg.height > 700)
			previewImg.height = 700;
		Iwidth = previewImg.offsetWidth;
		pwidth = Iwidth;
		Iheight = previewImg.offsetHeight;
		pheight = Iheight;
		uwidth = pwidth;
		uheight = pheight;
		document.querySelector("#preview").style.width = "" + pwidth + "px";
		document.querySelector("#preview").style.height = "" + pheight + "px";
		videoContainer.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		videoClipper.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		clippedVideo.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		clippedVideo.setAttribute("style", "width:" + pwidth + "px; height : " + pheight + "px;");
		document.getElementById("height").value = pheight;
		document.getElementById("width").value = pwidth;
		var rect1 = videoContainer.getBoundingClientRect();
		var rect2 = clippedVideo.getBoundingClientRect();
		var rect3 = document.querySelector("#preview").firstElementChild.getBoundingClientRect();
		document.querySelector("#preview").style.top = (rect1.top - rect3.top) + "px";
		document.querySelector("#preview").style.left = (rect1.left - rect3.left) + "px";
		clippedVideo.style.top = (rect1.top - rect2.top) + "px";
		clippedVideo.style.left = (rect1.left - rect2.left) + "px";
	}
}
function drag() {
	document.getElementById('uploadFile').parentNode.className = "draging dragBox";
}

function drop() {
	document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

/*--------------------------------------------------  Downloading An Image -------------------------------------------------- */
function canvasf(el) {
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	var cwidth = pwidth;
	var cheight = pheight;
	canvas.height = pheight;
	canvas.width = pwidth;
	if (rotate == 90 || rotate == -270) {
		ctx.setTransform(
			0, 1,    // x axis down the screen
			-1, 0,   // y axis across the screen from right to left
			cwidth, // x origin is on the right side of the canvas 
			0        // y origin is at the top
		);
	}
	else if (rotate == 180 || rotate == -180) {
		ctx.setTransform(
			-1, 0,    // x axis down the screen
			0, -1,   // y axis across the screen from right to left
			cwidth, // x origin is on the right side of the canvas 
			cheight        // y origin is at the top
		);
	}
	else if (rotate == 270 || rotate == -90) {
		ctx.setTransform(
			0, -1,    // x axis down the screen
			1, 0,   // y axis across the screen from right to left
			0, // x origin is on the right side of the canvas
			cheight       // y origin is at the top
		);
	}
	var flipwidth = 0;
	var flipheight = 0;
	if (scaleX == -1)
		flipwidth = -cwidth;
	if (scaleY == -1)
		flipheight = -cheight;
	ctx.filter = "grayscale(" + grayscale + "%) sepia(" + speia + "%) invert(" + invert * 100 + "%) brightness(" + (parseInt(brightness) + 100) + "%) contrast(" + (parseInt(contrast) + 100) + "%)";
	if (Math.abs(rotate) == 270 || Math.abs(rotate) == 90) {
		ctx.scale(scaleY, scaleX);
		ctx.drawImage(document.getElementById('image1'), flipheight, flipwidth, cheight, cwidth);
	}
	else {
		ctx.scale(scaleX, scaleY);
		ctx.drawImage(document.getElementById('image1'), flipwidth, flipheight, cwidth, cheight);
	}
	var dt = canvas.toDataURL('image/jpg');
	el.href = dt;
};

/*--------------------------------------------------  Tracking the mouse to change old image preview width -------------------------------------------------- */
function trackLocation(e) {
	var rect = videoContainer.getBoundingClientRect(),
		position = ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
	if (position <= 100) {
		if (position > 99.6)
			position = 100;
		videoClipper.style.width = position + "%";
		var ratio = 1;
		if (Math.abs(rotate) == 270 || Math.abs(rotate) == 90)
			ratio = pwidth / pheight;
		clippedVideo.style.width = ((100 / position) * 100 / ratio) + "%";
		clippedVideo.style.zIndex = 3;
	}
}

function leaveLocation(e) {
	videoClipper.style.width = "0px";
}