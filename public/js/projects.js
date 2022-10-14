setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);

setTimeout(() => {slideIn();}, 400);

function slideIn() {
	for(let i = 1; i <= 8; i++) {
		const img = document.getElementById("img" + i);
		img.style.display = "block";
		img.src = "../public/img/image" + Math.floor(Math.random() * 9) + ".png"
		img.style.animation = "transitionInBottomFar " + (i/10 + .5) + "s";
	}
}

function slideOut() {
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	
	for(let i = 1; i <= 8; i++) {
		const img = document.getElementById("img" + i);
		//img.display = "block";
		img.style.animation = "transitionOutBottomFar " + ((8 - i)/10 + .8) + "s";
		setTimeout(() => {img.style.display = "none";}, 800);
	}

	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = '/views/';}, 1600);
}

async function changeImage(ID, direction, direction2) {
	const dir = [direction, direction2][Math.floor(Math.random() * 2)];
	const img = document.getElementById(ID)
	img.style.animation = "transitionOut" + dir + " 1s";
	setTimeout(() => {img.style.animation = "transitionIn" + dir + " 1s"; img.src = "../public/img/image" + Math.floor(Math.random() * 8) + ".png";}, 900);
}