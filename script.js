var rotate = 0;
var scaleX = 1;
var scaleY = 1;
var tempwidth = 0;
var tempheight = 0;
function printRF() {
	document.querySelector("#preview").style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
}
function f_rotate() {
	rotate -= 90;
	if (rotate == -360)
		rotate = 0;
	if (rotate == -270 || rotate == -90)
		document.getElementById("preview").firstElementChild.style.width = "746px";
	else
		document.getElementById("preview").firstElementChild.style.width = "" + tempwidth + "px";
	printRF();
}
function f_rotate_r() {
	rotate += 90;
	if (rotate == 360)
		rotate = 0;
	if (rotate == 270 || rotate == 90)
		document.getElementById("preview").firstElementChild.style.width = "746px";
	else
		document.getElementById("preview").firstElementChild.style.width = "" + tempwidth + "px";
	console.log(tempheight);
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
		document.getElementById("preview").firstElementChild.style.width = "" + tempwidth + "px";
	document.getElementById("preview").firstElementChild.style.width = "" + value + "px";
}
function heightChange(value) {
	if (document.getElementById("height").value.length == 0)
		document.getElementById("preview").firstElementChild.style.height = "" + tempheight + "px";
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
		tempwidth = previewImg.width;
		tempheight = previewImg.height;
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
	var Iwidth = document.getElementById('image1').width;
	var Iheight = document.getElementById('image1').height;
	canvas.height=Iheight;
	canvas.width=Iwidth;
	console.log(Iheight);
	console.log(Iwidth);
	ctx.drawImage(document.getElementById('image1'), 0, 0, Iwidth, Iheight);
	var dt = canvas.toDataURL('image/jpg');
	el.href = dt;
};

	// var canvas = document.getElementById("myCanvas");
	// var Iwidth=document.getElementById('image1').offsetWidth;
	// var Iheight=document.getElementById('image1').offsetHeight;
	// canvas.width = Iwidth;
	// canvas.height = Iheight;
	// console.log(canvas.width);
	// console.log(canvas.height);
	// canvas.filter="brightness(500%)";
	// canvas.getContext("2d").drawImage(document.getElementById('image1'), 0, 0, Iwidth, Iheight);
	// var image = canvas.toDataURL("image/jpg");
	// el.href = image;
