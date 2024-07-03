//slide in
document.addEventListener('DOMContentLoaded', function() {
	//move out loading symbol
	document.getElementById("loading").style.animation = "transitionLoadingOut .6s";


	//unhide elements, animate in
	setTimeout(() => {
		document.querySelectorAll(`[slide-left], [slide-right]`).forEach(element =>{
			element.style.display = "block";
		})

		document.querySelectorAll(`[slide-left]`).forEach(element =>{
			element.style.animation = "transitionInLeft .7s";
		})
		document.querySelectorAll(`[slide-right]`).forEach(element =>{
			element.style.animation = "transitionInRight .7s";
		})
	}, 200);

	//hide loading
	setTimeout(() =>{
		document.getElementById("loading").style.display = "none";
	}, 550)
});



function slideOut(newHref) {
	//elements move out
	document.querySelectorAll(`[slide-left]`).forEach(element =>{
		element.style.animation = "transitionOutLeft .7s";
	})
	document.querySelectorAll(`[slide-right]`).forEach(element =>{
		element.style.animation = "transitionOutRight .7s";
	})

	setTimeout(() => {
		document.getElementById("loading").style.animation = "transitionLoadingIn .6s";
		document.getElementById("loading").style.display = "block";
	}, 200);

	//hide elements, loading moves in
	setTimeout(() => {
		document.querySelectorAll(`[slide-left], [slide-right]`).forEach(element =>{
			element.style.display = "none";
		})
	}, 650);
	
	//set new url
	setTimeout(() => {
		location.href = newHref;
	}, 650);
}