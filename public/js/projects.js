setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);

setTimeout(() => {slideIn();}, 400);

function slideIn() {
	for(let i = 1; i <= 8; i++) {
		const img = document.getElementById("img" + i).style;
		img.display = "block";
		img.animation = "transitionInBottomFar " + (i/10 + .5) + "s";
	}
}

function slideOut() {
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	
	for(let i = 1; i <= 8; i++) {
		const img = document.getElementById("img" + i).style;
		//img.display = "block";
		img.animation = "transitionOutBottomFar " + ((8 - i)/10 + .8) + "s";
		setTimeout(() => {img.display = "none";}, 800);
	}

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