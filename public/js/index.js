setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);
function slideOut(newHref) {
	document.getElementById("navbar-left").style.animation = "transitionOutLeft 1s";
	document.getElementById("firstname").style.animation = "transitionOutRight 1s";
	document.getElementById("lastname").style.animation = "transitionOutRight 1s";
	document.getElementById("loading").style.animation = "transitionInBottom .8s";
	document.getElementById("loading").style.display = "block";
	setTimeout(() => {location.href = newHref;}, 800);
}