//var fs = require('fs'); 

setTimeout(() => {document.getElementById("loading").style.display = "none"; slideIn();}, 400);
document.getElementById("unfocusProject").style.display = "none";

let availableProjects = [1,2,3,4,5,6,7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
windowResize();

function windowResize(){
	var container = document.getElementById("projects-container");
	container.style.height = (window.innerHeight*.88) + "px";
	if(window.innerWidth < window.innerHeight) { 
		container.style.gridTemplateColumns = "50% 50%";
		container.style.gridTemplateRows = "33% 33% 33%";
	}
	else {
		container.style.gridTemplateColumns = "33% 33% 33%";
		container.style.gridTemplateRows = "50% 50%";
	}
}

function getGridPosition(index) {
	const gridEl = document.getElementById("projects-container");
	let offset = Number(window.getComputedStyle(gridEl.children[0]).gridColumnStart) - 1; 
	if (isNaN(offset)) {
	  offset = 0;
	}
	
	const colCount = window.getComputedStyle(gridEl).gridTemplateColumns.split(" ").length;
	const rowPosition = Math.floor((index + offset) / colCount);
	const colPosition = (index + offset) % colCount;

	return { row: rowPosition, column: colPosition };
}

async function slideIn() {
	for(let i = 1; i <= 6; i++) {
		const num = getNewProjectID();
		const img = document.getElementById("img" + i);
		const info = await unpackProjectFile(num);
		img.src = info[0];

		setTimeout(() => {img.parentElement.parentElement.style.display = "block"; img.parentElement.parentElement.style.animation = "transitionInBottomFar " + (i/10 + .5) + "s";}, 400);
		
	}
}

async function setProjectInfo(ID) {
	const info = await unpackProjectFile(ID);
	console.log(info);
	var finalHTML = "";
	for(let i = 1; i < info.length; i++) {
		finalHTML += "<br />" + info[i];
	}
	document.getElementById("projectInfo").innerHTML = finalHTML;
}

async function focusProject(projectNum, open = false) {
	if(open) {
		var projectID = parseInt(document.getElementById("img" + projectNum).src.substring(47, 54));
		console.log("focus to project number " + projectID);

		//hide everything
		document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
		setTimeout(() => {document.getElementById("title").style.display = "none";}, 600);

		for(let i = 1; i <= 6; i++) {
			const img = document.getElementById("img" + i);
			img.parentElement.parentElement.style.animation = "transitionOutBottomMegaFar " + ((6 - i)/10 + .8) + "s";
			setTimeout(() => {img.parentElement.parentElement.style.display = "none";}, 800);
		}
		//show project info
		setTimeout(() => {
			document.getElementById("unfocusProject").style.animation = "transitionInLeft 1.8s";
			document.getElementById("unfocusProject").style.display = "block";

			setProjectInfo(projectID);
			
			document.getElementById("projectInfo").style.animation = "transitionInBottomMegaFar 1s";
			document.getElementById("projectInfo").style.display = "block"
		}, 1200)	
	} else {
		//hide everything
		document.getElementById("unfocusProject").style.animation = "transitionOutLeft 1.8s"
		setTimeout(() => {document.getElementById("unfocusProject").style.display = "none";}, 600);

		document.getElementById("projectInfo").style.animation = "transitionOutBottomMegaFar 1s";
		
		//show project info
		setTimeout(() => {
			document.getElementById("title").style.animation = "transitionInLeft 1.8s";
			document.getElementById("title").style.display = "block";

			document.getElementById("projectInfo").style.display = "none";

			for(let i = 1; i <= 6; i++) {
				const img = document.getElementById("img" + i);
				img.parentElement.parentElement.style.animation = "transitionInBottomFar " + ((6 - (6 - i))/10 + .8) + "s";
				setTimeout(() => {img.parentElement.parentElement.style.display = "block";}, 800);
			}
		}, 1000)
	}
	
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
		img.parentElement.parentElement.style.animation = "transitionOutBottomFar " + ((8 - i)/10 + .8) + "s";
		setTimeout(() => {img.parentElement.parentElement.style.display = "none";}, 800);
	}
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottomMegaFar .8s";}, 800);	

	setTimeout(() => {location.href = '/views/';}, 1600);
}

async function changeImage(ID, direction, direction2, direction3, direction4) {
	const img = document.getElementById(ID)
	const link = img.parentElement.onclick;
	img.parentElement.onclick = "";
	let dir = "";

	if(document.getElementById("projects-container").style.gridTemplateColumns != "50% 50%") {
		dir = [direction, direction2][Math.floor(Math.random() * 2)];
	} else {
		dir = [direction3, direction4][Math.floor(Math.random() * 2)];
	}

	img.parentElement.parentElement.style.animation = "transitionOut" + dir + " 1s";

	const pastProject = parseInt(img.src.substring(47, 54));
	const num = getNewProjectID(pastProject);
	const info = await unpackProjectFile(num);
	setTimeout(() => {img.parentElement.parentElement.style.animation = "transitionIn" + dir + " 1s"; img.src = info[0];}, 900);
	setTimeout(() => {img.parentElement.onclick = link;}, 1800);
}

async function unpackProjectFile(ID) {
	let file = await fetch("../public/files/project" + ID + ".txt");
	let text = await file.text();
	let lines = text.split("\n");
	
	return lines
}