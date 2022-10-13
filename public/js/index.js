setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);
function slideOut(newHref) {
	document.getElementById("navbar-left").style.animation = "transitionOutLeft 1.5s";
	document.getElementById("firstname").style.animation = "transitionOutRight 1.5s";
	document.getElementById("lastname").style.animation = "transitionOutRight 1.5s";
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 300);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 300);
	
	setTimeout(() => {location.href = newHref;}, 1200);
} 