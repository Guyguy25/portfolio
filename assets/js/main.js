document.querySelector("#nav-icon").addEventListener("click", function() {
	document.querySelector("#nav-icon").classList.toggle("open");
	document.querySelector(".overlay").classList.toggle("open");
});

$(".button-theme").click(function (){
	if(document.querySelector(".button-theme.light") == document.querySelector(".button-theme.light")){
		document.querySelector("html").classList.value = "dark"
		document.querySelector(".button-theme").classList.value = "button-theme dark"
	} else {
		document.querySelector("html").classList.value = "light"
		document.querySelector(".button-theme").classList.value = "button-theme light"
	}
})