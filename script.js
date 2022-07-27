var rotate = 0;
var scaleX = 1;
var scaleY = 1;
var Iwidth = 0;
var Iheight = 0;
function printRF() {
	document.querySelector("#preview").style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
}
function f_rotate() {
	rotate -= 90;
	if (rotate == -360)
		rotate = 0;
	if (rotate == -270 || rotate == -90) {
		if (Iwidth >= 746)
			document.getElementById("preview").firstElementChild.style.width = "746px";
		else
			document.getElementById("preview").firstElementChild.style.width = "" + Iwidth + "px";
	}
	printRF();
}
function f_rotate_r() {
	rotate += 90;
	if (rotate == 360)
		rotate = 0;
	if (rotate == 270 || rotate == 90) {
		if (Iwidth >= 746)
			document.getElementById("preview").firstElementChild.style.width = "746px";
		else
			document.getElementById("preview").firstElementChild.style.width = "" + Iwidth + "px";
	}
	console.log(Iheight);
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
	if (document.getElementById("width").value.length == 0)
		document.getElementById("preview").firstElementChild.style.width = "" + Iwidth + "px";
	document.getElementById("preview").firstElementChild.style.width = "" + value + "px";
}
function heightChange(value) {
	if (document.getElementById("height").value.length == 0)
		document.getElementById("preview").firstElementChild.style.height = "" + Iheight + "px";
	document.getElementById("preview").firstElementChild.style.height = "" + value + "px";
}


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
		Iheight = previewImg.height;
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
	canvas.height = Iheight;
	canvas.width = Iwidth;
	// style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";	
	if (rotate == 90 || rotate == -270) {
		canvas.height = Iwidth;
		canvas.width = Iheight;
		ctx.setTransform(
			0, 1,    // x axis down the screen
			-1, 0,   // y axis across the screen from right to left
			Iheight, // x origin is on the right side of the canvas 
			0        // y origin is at the top
		);
	}
	else if (rotate == 180 || rotate == -180)
		ctx.setTransform(1, 0, 0, -1, 0, Iheight);
	else if (rotate == 270 || rotate == -90) {
		canvas.height = Iwidth;
		canvas.width = Iheight;
		ctx.setTransform(
			0, -1,    // x axis down the screen
			1, 0,   // y axis across the screen from right to left
			0, // x origin is on the right side of the canvas 
			Iwidth        // y origin is at the top
		);
	}
	ctx.filter = "grayscale(" + grayscale + "%) sepia(" + speia + "%) invert(" + invert * 100 + "%) brightness(" + (parseInt(brightness) + 100) + "%) contrast(" + (parseInt(contrast) + 100) + "%)";
	ctx.drawImage(document.getElementById('image1'), 0, 0, Iwidth, Iheight);
	var dt = canvas.toDataURL('image/jpg');
	el.href = dt;
};