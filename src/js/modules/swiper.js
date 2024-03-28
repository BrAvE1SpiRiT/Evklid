export const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 3000,
	},
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	scrollbar: {
		hide: true,
	},
	effect: 'fade',
	on: {
		slideChange: function () {
			var bullets = document.querySelectorAll('.swiper-pagination-bullet');
			bullets.forEach(function (bullet) {
				bullet.tabIndex = -1;
			});
		}
	}
});