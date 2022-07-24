function rangeSlide1(value) {
	document.getElementById('rangeValue1').innerHTML = value;
}
function rangeSlide2(value) {
	document.getElementById('rangeValue2').innerHTML = value;
}
function rangeSlide3(value) {
	document.getElementById('rangeValue3').innerHTML = value;
}
function rangeSlide4(value) {
	document.getElementById('rangeValue4').innerHTML = value;
}
function rangeSlide5(value) {
	document.getElementById('rangeValue5').innerHTML = value;
}



var rotate = 0;
var scaleX = 1;
var scaleY = 1;
function f_rotate() {
	rotate -= 90;
	if (rotate == -360)
		rotate = 0;
	printRF();
}
function f_rotate_r() {
	rotate += 90;
	if (rotate == 360)
		rotate = 0;
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
function printRF() {
	document.querySelector("#preview").style.transform = "scale(" + scaleX + "," + scaleY + ") rotate(" + (rotate) + "deg)";
}



function dragNdrop(event) {
	var filename = URL.createObjectURL(event.target.files[0]);
	var preview = document.getElementById('preview');
	var previewImg = document.createElement("img");
	previewImg.setAttribute("src", filename);
	preview.innerHTML = "";
	preview.appendChild(previewImg);
	document.getElementById('dragBox').style.display = 'none';
}
function drag() {
	document.getElementById('uploadFile').parentNode.className = "draging dragBox";
}
function drop() {
	document.getElementById('uploadFile').parentNode.className = 'dragBox';
}