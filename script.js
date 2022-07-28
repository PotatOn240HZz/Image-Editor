var rotate = 0;
var scaleX = 1;
var scaleY = 1;
var Iwidth = 0;
var Iheight = 0;
var pwidth = 0;
var pheight = 0;
function printRF() {
	document.querySelector("#preview").style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
}
function f_rotate() {
	rotate -= 90;
	if (rotate == -360)
		rotate = 0;
	if (rotate == -270 || rotate == -90) {
		if (pwidth >= 746)
			document.getElementById("preview").firstElementChild.style.width = "746px";
		else
			document.getElementById("preview").firstElementChild.style.width = "" + pwidth + "px";
	}
	printRF();
}
function f_rotate_r() {
	rotate += 90;
	if (rotate == 360)
		rotate = 0;
	if (rotate == 270 || rotate == 90) {
		if (pwidth >= 746)
			document.getElementById("preview").firstElementChild.style.width = "746px";
		else
			document.getElementById("preview").firstElementChild.style.width = "" + pwidth + "px";
	}
	console.log(pheight);
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
	if (document.getElementById("width").value.length == 0 || document.getElementById("width").value == 0) {
		document.getElementById("preview").firstElementChild.style.width = "" + Iwidth + "px";
		pwidth = Iwidth;
		document.getElementById("width").value = pwidth;
	}
	else {
		document.getElementById("preview").firstElementChild.style.width = "" + value + "px";
		pwidth = value;
	}

}
function heightChange(value) {
	if (document.getElementById("height").value.length == 0 || document.getElementById("height").value == 0) {
		document.getElementById("preview").firstElementChild.style.height = "" + Iheight + "px";
		pheight = Iheight;
		document.getElementById("height").value = pheight;
	}
	else {
		document.getElementById("preview").firstElementChild.style.height = "" + value + "px";
		pheight = value;
	}
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
		pwidth = Iwidth;
		pheight = Iheight;
		document.getElementById("height").value = pheight;
		document.getElementById("width").value = pwidth;

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
	// style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";	
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
		var temp=scaleX;
		scaleX=scaleY;
		scaleY=temp;
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
		var temp=scaleX;
		scaleX=scaleY;
		scaleY=temp;
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