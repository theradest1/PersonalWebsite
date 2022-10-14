setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);

function slideOut() {
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = '/views/';}, 1600);
}

async function changeImage(ID, direction, direction2) {
	const dir = [direction, direction2][Math.floor(Math.random() * 2)];
	const img = document.getElementById(ID)
	img.style.animation = "transitionOut" + dir + " 1s";
	setTimeout(() => {img.style.animation = "transitionIn" + dir + " 1s";}, 900);
}