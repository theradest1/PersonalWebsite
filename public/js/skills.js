setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);
function slideOut() {
	document.getElementById("hambar").style.animation = "transitionOutLeft 1s"
	document.getElementById("title").style.animation = "transitionOutLeft 1s"
	document.getElementById("loading").style.animation = "transitionInBottom .8s";
	document.getElementById("loading").style.display = "block";
	setTimeout(() => {location.href = '/';}, 800);
}

function toggleDiv(ID, displayType="block", slide = "none") {
  var x = document.getElementById(ID);
  if (x.style.display === displayType) {
	if (slide == "right") {
		x.style.animation = "transitionOutRight .5s"
	}
	else if (slide == "left") {
		x.style.animation = "transitionOutLeft .5s"
	}

	setTimeout(() => {x.style.display = "none";}, 400);
  } else {
	if (slide == "right") {
		x.style.animation = "transitionInRight .5s"
	}
	else if (slide == "left") {
		x.style.animation = "transitionInLeft .5s"
	}

	x.style.display = displayType;
  }
}