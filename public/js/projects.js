setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);
setTimeout(() => {slideIn();}, 400);

let availableProjects = [0,1,2,3,4,5,6,7,8];

function slideIn() {
	for(let i = 1; i <= 8; i++) {
		const num = getNewProjectID();
		const img = document.getElementById("img" + i);
		img.src = "../public/img/image" + num + ".png"

		setTimeout(() => {img.style.display = "block"; img.style.animation = "transitionInBottomFar " + (i/10 + .5) + "s";}, 400);
		
	}
}

function getNewProjectID(oldID = -1) {
	const num = availableProjects[Math.floor(Math.random() * availableProjects.length)];
	availableProjects.splice(availableProjects.indexOf(num), 1);
	if(oldID != -1) {
		availableProjects.push(oldID);
	}
	console.log(availableProjects);
	return num;
}

function slideOut() {
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	
	
	for(let i = 1; i <= 8; i++) {
		const img = document.getElementById("img" + i);
		//img.display = "block";
		img.style.animation = "transitionOutBottomFar " + ((8 - i)/10 + .8) + "s";
		setTimeout(() => {img.style.display = "none";}, 800);
	}
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottomMegaFar .8s";}, 800);	

	setTimeout(() => {location.href = '/views/';}, 1600);
}

async function changeImage(ID, direction, direction2) {
	const img = document.getElementById(ID)
	const link = img.parentElement.onclick;
	img.parentElement.onclick = "";
	const dir = [direction, direction2][Math.floor(Math.random() * 2)];

	img.style.animation = "transitionOut" + dir + " 1s";

	const pastImg = parseInt(img.src.substring(38, 45));
	console.log(img.src.substring(38, 45));
	const num = getNewProjectID(pastImg);
	setTimeout(() => {img.style.animation = "transitionIn" + dir + " 1s"; img.src = "../public/img/image" + num + ".png";}, 900);
	setTimeout(() => {img.parentElement.onclick = link;}, 1800);
}