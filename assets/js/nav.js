/* JS Functions for Hamburguer Menu on Mobile */

function openMenu() {
	var navlinks = document.getElementById("nav-links");
	var menuState = document.getElementById("menuicon");
	if (navlinks.style.display === "block" && (window.innerWidth < 850)) {
		navlinks.style.display = "none";
		menuState.src = "/assets/svg/icons-menu/hamburger.svg";
		}
	else {
		navlinks.style.display = "block"; 
		menuState.src = "/assets/svg/icons-menu/close.svg";
		}

}

function hideMenu() {
	var navlinks = document.getElementById("nav-links");
	var menuState = document.getElementById("menuicon");
	if (window.innerWidth < 850) {
		navlinks.style.display = "none";
		menuState.src = "/assets/svg/icons-menu/hamburger.svg";}
	else {
		null;
	}
}