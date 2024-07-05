//var fs = require('fs'); 

var preFiles = "";//../public";
var baseDir = "/";///views/";
var distanceToID = 43;//47;
//console.log(window.location.href);


let availableProjects = scrambleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]); //I know it's bad, I just don't feel like being quality

addInitialProjects()

function scrambleArray(array) {
	for(let i = 1; i < array.length - 1; i++){
		const rand = Math.floor(Math.random() * array.length);

		const j = array[rand];
		array[rand] = array[i];
		array[i] = j;
	}
	console.log(array);
	return array;
}

async function addInitialProjects() {
	for(let i = 1; i <= 6; i++) {
		const num = getNewProjectID();
		const img = document.getElementById("img" + i);
		const info = await unpackProjectFile(num);
		img.src = preFiles + info[0];
	}
}

async function setProjectInfo(ID) {
	const info = await unpackProjectFile(ID);
	//console.log(info);
	var finalHTML = "";
	for(let i = 1; i < info.length; i++) {
		finalHTML += "<br />" + info[i];
	}
	document.getElementById("projectInfo").innerHTML = finalHTML;
}

function getProjectIDFromElement(element) {
	const parts = element.split("/");
	console.log(parts);
	console.log(parts[parts.length - 1].substring(5, 8));
	return parseInt(parts[(parts.length - 1)].substring(5, 8));
}

async function focusProject(projectNum, open = false) {
	if(open) {
		var projectID = getProjectIDFromElement(document.getElementById("img" + projectNum).src);
		console.log(document.getElementById("img" + projectNum).src);
		console.log("focus to project number " + projectID);

		//hide everything
		document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
		setTimeout(() => {document.getElementById("title").style.display = "none";}, 600);

		for(let i = 1; i <= 6; i++) {
			const img = document.getElementById("img" + i);
			if((i == 1 || i == 2 || i == 4) && window.innerWidth > window.innerHeight || (i == 3 || i == 5 || i == 6) && window.innerWidth < window.innerHeight) {
				img.parentElement.parentElement.style.animation = "transitionOutLeft 1s";
			}else {
				img.parentElement.parentElement.style.animation = "transitionOutRight 1s";
			}
			setTimeout(() => {img.parentElement.parentElement.style.display = "none";}, 800);
		}
		//show project info
		setTimeout(() => {
			document.getElementById("unfocusProject").style.animation = "transitionInLeft 1.4s";
			document.getElementById("unfocusProject").style.display = "block";

			setProjectInfo(projectID);
			
			document.getElementById("projectInfo").style.animation = "transitionInBottom 1s";
			document.getElementById("projectInfo").style.display = "block"
		}, 1000)	
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
			document.getElementById("projectInfo").innerHTML = "";

			for(let i = 1; i <= 6; i++) {
				const img = document.getElementById("img" + i);
				if((i == 1 || i == 2 || i == 4) && window.innerWidth > window.innerHeight || (i == 3 || i == 5 || i == 6) && window.innerWidth < window.innerHeight) {
					img.parentElement.parentElement.style.animation = "transitionInLeft 1s";
				}else {
					img.parentElement.parentElement.style.animation = "transitionInRight 1s";
				}
				//img.parentElement.parentElement.style.animation = "transitionInBottom " + ((6 - (6 - i))/10 + .8) + "s";
				setTimeout(() => {img.parentElement.parentElement.style.display = "block";}, 800);
			}
		}, 800)
	}
	
}

function getNewProjectID(oldID = -1) {
	const num = availableProjects[0];
	availableProjects.splice(availableProjects.indexOf(num), 1);
	if(oldID != -1) {
		availableProjects.push(oldID);
	}
	console.log(availableProjects);
	return num;
}

async function changeImage(ID, direction, direction2, direction3, direction4) {
	const img = document.getElementById(ID)
	const link = img.parentElement.onclick;
	img.parentElement.onclick = "";
	let dir = "";

	if(document.getElementById("projects-grid").style.gridTemplateColumns != "50% 50%") {
		dir = [direction, direction2][Math.floor(Math.random() * 2)];
	} else {
		dir = [direction3, direction4][Math.floor(Math.random() * 2)];
	}

	img.parentElement.parentElement.style.animation = "transitionOut" + dir + " 1s";

	const pastProject = getProjectIDFromElement(img.src);
	console.log("Past Project: " + pastProject);
	const num = getNewProjectID(pastProject);
	const info = await unpackProjectFile(num);
	setTimeout(() => {img.parentElement.parentElement.style.opacity = "0%"; img.src = preFiles + info[0]; }, 800);
	setTimeout(() => {img.parentElement.parentElement.style.animation = "transitionIn" + dir + " 1s";},1700);
	setTimeout(() => {img.parentElement.parentElement.style.opacity = "100%";},1800);
	setTimeout(() => {img.parentElement.onclick = link;}, 2600);
}

function imageIsLoaded(ID) {
	console.log("image loaded");
}

async function unpackProjectFile(ID) {
	let file = await fetch(preFiles + "/files/project" + ID + ".txt");
	let text = await file.text();
	let lines = text.split("\n");
	
	return lines
}