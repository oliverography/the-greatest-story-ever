// target container with id of starfield

var starfield = document.getElementById("starfield")
var startDensity = 100;
var endDensity = 0;
var range = startDensity - endDensity;
var increment = 1
var lines = 100;
var height = starfield.clientHeight;

var top = 0;

// receives a number between 1 (top) and 0 (bottom)
function getDensity(pos) {
	return pos * range
}

getDensity(.75)

function populateStars() {
	// Loop over each line
	for (i = increment; i < lines; i += increment) {
		console.log(i);
		var offsetTop = i / lines * height + "px";
		var offsetLeft = Math.random() * 100 + "%";
		console.log(offsetLeft);
		starfield.innerHTML += `<div class='star animated infinite spin' style='top:${offsetTop};left:${offsetLeft}'></div>`
	}
}

populateStars()