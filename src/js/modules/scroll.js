export const scroll = function () {

	document.querySelectorAll('.nav__link').forEach(link => {

		link.addEventListener('click', function (e) {
			e.preventDefault();

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);

			const topOffset = document.querySelector('.header').offsetHeight + 30;
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});
}