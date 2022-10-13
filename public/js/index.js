setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);

function slideOut(newHref) {
	document.getElementById("navbar-left").style.animation = "transitionOutLeft 1.8s";
	document.getElementById("firstname").style.animation = "transitionOutRight 1.8s";
	document.getElementById("lastname").style.animation = "transitionOutRight 1.8s";
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = newHref;}, 1600);
} 