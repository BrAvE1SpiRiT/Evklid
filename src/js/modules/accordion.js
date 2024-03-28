export const accordion = function () {
	$("#accordion").accordion({
		heightStyle: 'content',
		collapsible: true,
		active: true,
	});
	const accordionTitle = document.querySelector('.accordion__title');
	accordionTitle.tabIndex = -1;
	
};