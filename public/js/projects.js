var preFiles = "";//../public";
var baseDir = "/";///views/";
var distanceToID = 43;//47;
//console.log(window.location.href);

let availableProjects = scrambleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]); //I know it's bad, I just don't feel like being quality

//addInitialProjects()

window.addEventListener('resize', updateGrid);
window.addEventListener('load', updateGrid);

function scrambleArray(array) {
	for(let i = 1; i < array.length - 1; i++){
		const rand = Math.floor(Math.random() * array.length);

		const j = array[rand];
		array[rand] = array[i];
		array[i] = j;
	}
	//console.log(array);
	return array;
}

async function updateGrid(){
	PPI = 96

	width = window.innerWidth / PPI;
	height = window.innerHeight / PPI;

	minWidth = 3;
	minHeight = 3;

	columns = Math.min(Math.max(Math.floor(width/minWidth), 1), 6);
	rows = Math.min(Math.max(Math.floor(height/minHeight), 1), 4);

	rowPercent = 1/rows*100
	columnPercent = 1/columns*100

	projectsGrid = document.getElementById("projects-grid")
	projectsGrid.style.gridTemplateColumns = `repeat(${columns}, ${columnPercent}%)`;
	projectsGrid.style.gridTemplateRows = `repeat(${rows}, ${rowPercent}%)`;

	//delete old project things
	document.querySelectorAll(`[project]`).forEach(element =>{
		availableProjects.push(parseInt(element.id));

		element.remove()
	})

	projectTemplate = document.querySelector('[project-template]')
	//console.log(projectTemplate)
	for(i = 0; i < rows * columns; i++){
		newProject = projectTemplate.content.cloneNode(true).children[0]

		projectID = getNewProjectID()
		projectInfo = await unpackProjectFile(projectID);
		newProject.querySelector('img').src = preFiles + projectInfo[0];

		newProject.id = projectID + ""

		projectsGrid.append(newProject)

	}
}

/*async function addInitialProjects() {
	for(let i = 1; i <= 6; i++) {
		const num = getNewProjectID();
		const img = document.getElementById("img" + i);
		const info = await unpackProjectFile(num);
		img.src = preFiles + info[0];
	}
}*/

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

function getNewProjectID(oldID = -1) {
	const num = availableProjects[0];
	availableProjects.splice(availableProjects.indexOf(num), 1);
	if(oldID != -1) {
		availableProjects.push(oldID);
	}
	//console.log(availableProjects);
	return num;
}

async function unpackProjectFile(ID) {
	let file = await fetch(preFiles + "/files/project" + ID + ".txt");
	let text = await file.text();
	let lines = text.split("\n");
	
	return lines
}