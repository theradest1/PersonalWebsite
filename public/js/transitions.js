function getTransition(x, y, type, time){
	//x and y are percents
	direction = "None"
	if(x < .4){
		direction = "Left"
	}
	else if(x > .6){
		direction = "Right"
	}
	else{
		if(Math.random() < .5){
			direction = "Left"
		}
		else{
			direction = "Right"
		}
	}

	return "transition" + type + direction + " " + time + "s"
}


//slide in
document.addEventListener('DOMContentLoaded', function() {
	//move out loading symbol
	document.getElementById("loading").style.animation = "transitionLoadingOut .6s";

	//unhide elements, animate in
	setTimeout(() => {
		//turn everything on first so that the position info is correct
		document.querySelectorAll(`[transition-component]`).forEach(element =>{
			element.style.display = "block";
		})

		document.querySelectorAll(`[transition-component]`).forEach(element =>{

			var rect = element.getBoundingClientRect();
			var x = (rect.left + rect.right)/2
			var y = (rect.top + rect.bottom)/2
			element.style.animation = getTransition(x/window.innerWidth, y/window.innerHeight, "In", 0.7)
		})
	}, 200);

	//hide loading
	setTimeout(() =>{
		document.getElementById("loading").style.display = "none";
	}, 550)
});



function slideOut(newHref) {
	//elements move out
	document.querySelectorAll(`[transition-component]`).forEach(element =>{
		var rect = element.getBoundingClientRect();
		var x = (rect.left + rect.right)/2
		var y = (rect.top + rect.bottom)/2

		element.style.animation = getTransition(x/window.innerWidth, y/window.innerHeight, "Out", 0.7)
	})

	setTimeout(() => {
		document.getElementById("loading").style.animation = "transitionLoadingIn .6s";
		document.getElementById("loading").style.display = "block";
	}, 200);

	//hide elements, loading moves in
	setTimeout(() => {
		document.querySelectorAll(`[transition-component]`).forEach(element =>{
			element.style.display = "none";
		})
	}, 650);
	
	//set new url
	setTimeout(() => {
		location.href = newHref;
	}, 650);
}