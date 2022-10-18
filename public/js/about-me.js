setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);
var baseDir = "/";

function slideOut() {
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	document.getElementById("school-description").style.animation = "transitionOutLeft 1.8s"
	
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = baseDir;}, 1600);
}