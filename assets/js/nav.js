/* JS Functions for Hamburguer Menu on Mobile */
var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

function openMenu() {
	var navlinks = document.getElementById("nav-links");
	var menuState = document.getElementById("menuicon");
	if (navlinks.style.display === "block" && (window.innerWidth < 850)) {
		navlinks.style.display = "none";
		menuState.src = baseUrl+"/assets/svg/icons-menu/hamburger.svg";
		}
	else {
		navlinks.style.display = "block"; 
		menuState.src = baseUrl+"/assets/svg/icons-menu/close.svg";
		}
}

function hideMenu() {
	var navlinks = document.getElementById("nav-links");
	var menuState = document.getElementById("menuicon");
	if (window.innerWidth < 850) {
		navlinks.style.display = "none";
		menuState.src = baseUrl+"/assets/svg/icons-menu/hamburger.svg";}
	else {
		null;
	}
}




/*  */
window.setTimeout(async function(){



	var blob = null;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", baseUrl+"/assets/pdf/pdfdemonio.pdf");
	xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
	xhr.onload = function()
	{
		blob = xhr.response;//xhr.response is now a blob object
		const file = new File([blob], 'omeudocumento.pdf', { type: 'application/pdf' });


		const shareButton = document.querySelector('.botaoespecial');
		const overlay = document.querySelector('.overlay');
		const shareModal = document.querySelector('.share');
	
		const title = window.document.title;
		const url = window.document.location.href;
	
		shareButton.addEventListener('click', () => {
			if (navigator.share) {
				navigator.share({
					title: `${title}`,
					files: [file]
				}).then(() => {
					console.log('Thanks for sharing!');
				})
				.catch(console.error);
			} else {
				overlay.classList.add('show-share');
				shareModal.classList.add('show-share');
			}
		})
	
		overlay.addEventListener('click', () => {
			overlay.classList.remove('show-share');
			shareModal.classList.remove('show-share');
		})
	}
	xhr.send();



}, 2000)
