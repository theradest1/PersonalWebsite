setTimeout(() => {document.getElementById("loading").style.display = "none";}, 400);

var openSkillID = "none";
var baseDir = "/";

function slideOut() {
	document.getElementById("hambar-list").style.animation = "transitionOutLeft 1.8s"
	document.getElementById("skill-list-container").style.animation = "transitionOutRightFar 1.8s"
	document.getElementById("title").style.animation = "transitionOutLeft 1.8s"
	setTimeout(() => {document.getElementById("loading").style.animation = "transitionInBottom .8s";}, 800);
	setTimeout(() => {document.getElementById("loading").style.display = "block";}, 800);
	
	setTimeout(() => {location.href = baseDir;}, 1600);
}

function toggleSkill(ID, displayType="block") {
  	var x = document.getElementById(ID);
  	if (x.style.display == "block") {
		x.style.animation = "transitionOutRight .5s ease-in"

		openSkillID = "none";
		setTimeout(() => {x.style.display = "none";}, 400);
	} else {
		var timeout = 1;
		if(openSkillID != "none"){
			timeout = 500;
			document.getElementById(openSkillID).style.animation = "transitionOutRight .5s ease-in"
			setTimeout(() => {document.getElementById(openSkillID).style.display = "none";}, 400);
		}
		
		setTimeout(() => {
			x.style.animation = "transitionInRight .5s ease-out"
			openSkillID = ID;
			x.style.display = displayType;
		}, timeout);
		
  	}
}