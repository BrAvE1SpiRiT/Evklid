function searchForm() {
	const searchButton = document.querySelector('.header__search');
	const searchForm = document.querySelector('.header__form');
	const closeButton = document.querySelector('.header-form__closed');
	searchButton.onclick = function () {
		searchForm.style.display = 'block';
		setTimeout(() => {
			searchForm.style.opacity = 1;
			searchForm.classList.add('form-active')
		}, 10);
	};

	closeButton.onclick = function () {
		searchForm.style.opacity = 0;
		searchForm.classList.remove('form-active')
		setTimeout(() => {
			searchForm.style.display = 'none';
		}, 300);
	};
}

export default searchForm;