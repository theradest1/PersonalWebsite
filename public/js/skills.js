setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);

function slideOut() {
	document.getElementById("hambar").style.animation = "transitionOutLeft 1.8s"
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = '/views/';}, 1600);
}

function toggleDiv(ID, displayType="block", slide = "none") {
  	var x = document.getElementById(ID);
  	if (x.style.display === displayType) {
		if (slide == "right") {
			x.style.animation = "transitionOutRight .5s ease-in"
		}
		else if (slide == "left") {
			x.style.animation = "transitionOutLeft .5s ease-in"
		}

		setTimeout(() => {x.style.display = "none";}, 400);
	} else {
		if (slide == "right") {
			x.style.animation = "transitionInRight .5s ease-out"
		}
		else if (slide == "left") {
			x.style.animation = "transitionInLeft .5s ease-out"
		}

		x.style.display = displayType;
  	}
}