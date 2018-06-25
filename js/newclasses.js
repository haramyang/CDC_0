function addAClass() {

	//Adds new html div, specifically new class boxes to the newclasses.html page. Single quotes should be used for the html that's being added.
	document.getElementById("Right Side").innerHTML += '<div class="class-box fadeInDown animated"><a href="wha" class="round-box color-box"> hello </a></div>';

	//alert("Hello World! :)");
}

/*
var modal = document.getElementById('login');

var btn = document.getElementById('loginBtn');

var span = document.getElementByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
*/