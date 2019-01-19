const sliderItems = document.querySelectorAll('.field-range__value');
const sliderButton = document.querySelector('.field-range__track-btn');

Array.prototype.slice.call(sliderItems).forEach(function (item, index) {
	item.addEventListener('click', function () {
		const isLast = index + 1 === sliderItems.length;
		let itemPosition = item.offsetLeft;

		if (isLast) {
			itemPosition += item.offsetWidth;
		}

		sliderButton.style.left = itemPosition + 'px';
	});
});
