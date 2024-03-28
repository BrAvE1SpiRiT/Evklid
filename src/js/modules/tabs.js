export const tabs = function() {
	document.querySelectorAll('.steps__btn').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path
			const stepsBtn = document.querySelectorAll('.steps__btn')
			const stepsBlock = document.querySelectorAll('.steps__step')
			stepsBlock.forEach(function (tabContent) {
				tabContent.classList.remove('block')
			})
			stepsBtn.forEach(function (tabContent) {
				tabContent.classList.remove('btn-active')
			})
			document.querySelector(`[data-path="${path}"]`).classList.add('btn-active')
			document.querySelector(`[data-target="${path}"]`).classList.add('block')
		})
	})
}