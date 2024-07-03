var openSkillID = "none";
var baseDir = "/";

function toggleSkill(ID, displayType="block") {
	if(openSkillID != ID){

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
}