const switchToggle = document.getElementById("switch"),
	switchToggleImg = document.getElementById("switchToggleImg"),
	body = document.getElementById("body");

let switchState = true;
switchToggle.addEventListener("click", ()=>{
	body.classList.toggle("dark");


	if(switchState){
		switchToggleImg.src = "img/icons/moon.png";
		switchState = !switchState;
	}else{
		switchToggleImg.src = "img/icons/sun.png";
		switchState = !switchState;
	}
});
