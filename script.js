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


"use strict";

//we need three functions here
//1.dragNdrop(event)

function dragNdrop(event){
    var filename = URL.createObjectURL(event.target.files[0]); //will store file name with src
	var preview = document.getElementById('preview'); //the div where we will show image
	var previewImg = document.createElement("img"); //creating new image tag
	previewImg.setAttribute("src",filename); //setting attribute src of newly created "img" element to "filename"
	preview.innerHTML = "";
	preview.appendChild(previewImg); //finally append "img" element to parent element "preview"
}

//2. drag

function drag(){
	//while dragging it will fire this function that will add the following class
	document.getElementById('uploadFile').parentNode.className = "draging dragBox";
}

//3. finally the drop()
function drop(){
    document.getElementById('dragBox').style.display = 'none';
	document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

// we are done... 