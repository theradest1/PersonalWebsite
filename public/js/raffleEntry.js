setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);
var baseDir = "/";
const ticketID = window.location.href.split('/')[window.location.href.split('/').length - 1];

function slideOut() {
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	document.getElementById("raffle-entry").style.animation = "transitionOutLeft 1.8s"
	
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = baseDir;}, 1600);
}

function enterData(){
	console.log(ticketID);
	console.log(document.getElementById("name").value)
	console.log(document.getElementById("phone").value)
	console.log(document.getElementById("address").value)
}