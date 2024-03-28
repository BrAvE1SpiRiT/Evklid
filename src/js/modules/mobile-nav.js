function mobileNav() {
	const navBtn = document.querySelector('.mobile-nav-btn');
	const navIcon = document.querySelector('.nav-icon');
	const nav = document.querySelector('.nav');

	navBtn.onclick = function () {
		navBtn.classList.toggle('burger-active');
		navIcon.classList.toggle('active-icon-burger');
		nav.classList.toggle('burger-active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;