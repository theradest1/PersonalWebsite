setTimeout(() => {document.getElementById("loading").style.display = "none";}, 300);

function showProject(projectURL) {
	document.getElementById("projectIframe").src = projectURL;
}

function slideOut(newHref) {
	document.getElementById("navbar-left").style.animation = "transitionOutLeft 1.8s";
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = newHref;}, 1600);
} 