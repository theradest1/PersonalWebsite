setTimeout(() => {document.getElementById("loading").style.display = "none"; slideIn();}, 400);

let availableProjects = [0,1,2,3,4,5,6,7,8];
windowResize();

function windowResize(){
	var container = document.getElementById("projects-container");
	container.style.height = (window.innerHeight - 80) + "px";
	if(window.innerWidth < window.innerHeight) { 
		container.style.gridTemplateColumns = "50% 50%";
		container.style.gridTemplateRows = "33% 33% 33%";
	}
	else {
		container.style.gridTemplateColumns = "33% 33% 33%";
		container.style.gridTemplateRows = "50% 50%";
	}
}

function slideIn() {
	for(let i = 1; i <= 6; i++) {
		const num = getNewProjectID();
		const img = document.getElementById("img" + i);
		img.src = "../public/img/image" + num + ".png"

		setTimeout(() => {img.parentElement.parentElement.style.display = "block"; img.parentElement.parentElement.style.animation = "transitionInBottomFar " + (i/10 + .5) + "s";}, 400);
		
	}
}

function focusProject(projectNum) {
	const projectID = parseInt(document.getElementById("img" + projectNum).src.substring(38, 45));
	console.log("focus to project number " + projectID);
}

function getNewProjectID(oldID = -1) {
	const num = availableProjects[Math.floor(Math.random() * availableProjects.length)];
	availableProjects.splice(availableProjects.indexOf(num), 1);
	if(oldID != -1) {
		availableProjects.push(oldID);
	}
	return num;
}

function slideOut() {
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	
	
	for(let i = 1; i <= 6; i++) {
		const img = document.getElementById("img" + i);
		//img.display = "block";
		img.parentElement.parentElement.style.animation = "transitionOutBottomFar " + ((8 - i)/10 + .8) + "s";
		setTimeout(() => {img.parentElement.parentElement.style.display = "none";}, 800);
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

	img.parentElement.parentElement.style.animation = "transitionOut" + dir + " 1s";

	const pastImg = parseInt(img.src.substring(38, 45));
	const num = getNewProjectID(pastImg);
	setTimeout(() => {img.parentElement.parentElement.style.animation = "transitionIn" + dir + " 1s"; img.src = "../public/img/image" + num + ".png";}, 900);
	setTimeout(() => {img.parentElement.onclick = link;}, 1800);
}