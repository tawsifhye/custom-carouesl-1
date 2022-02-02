const itializeSlide = () => {

}

$(document).ready(() => {
	const itemsPerPage = 3;
	const numberOfItems = $('.product').length;
	const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

	$('#current_page').val(0);
	$('#show_per_page').val(itemsPerPage);
	// console.log($('#current_page').val(), $('#show_per_page').val());

	let navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
	let current_link = 0;
	while (numberOfPages > current_link) {
		navigation_html += '<a class="page_link" href="javascript:goToPage(' + current_link + ')" value="' + current_link + '">' + (current_link + 1) + '</a>';
		current_link++;
		console.log(navigation_html);
	}
	navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';

	$('#page_navigation').html(navigation_html);

	$('#page_navigation .page_link:first').addClass('active_page');
	$('#slider-container').children().css('display', 'none');
	$('#slider-container').children().slice(0, itemsPerPage).css('display', 'block')
})

const previous = () => {
	const newPage = parseInt($('#current_page').val()) - 1;
	if ($('.active_page').prev('.page_link').length == true) {
		goToPage(newPage);
	}
}

const next = () => {
	const newPage = parseInt($('#current_page').val()) + 1;
	if ($('.active_page').next('.page_link').length == true) {
		goToPage(newPage);
	}
}


const goToPage = (pageNum) => {

	let itemsPerPage = parseInt($('#show_per_page').val())
	let startFrom = pageNum * itemsPerPage;
	// console.log(startFrom);
	let endOn = startFrom + itemsPerPage;
	// console.log(endOn);

	$('#slider-container').children().css('display', 'none').slice(startFrom, endOn).css('display', 'block');
	$('.page_link[value=' + pageNum + ']').addClass('active_page').siblings('.active_page').removeClass('active_page');
	$('#current_page').val(pageNum);
}











/* const span = document.getElementsByTagName('span');
const product = document.getElementsByClassName('product')
const sliderContainerWidth = 1100;

const dots = document.getElementById('dots')
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
// let mob_view = window.matchMedia("(max-width: 768px)");
// if (mob_view.matches) {
// 	movePer = 50.36;
// 	maxMove = 504;
// }


const right_mover = () => {
	l = l + movePer;
	if (product == 1) { l = 0; }
	for (const i of product) {
		if (l > maxMove) { l = 0; }
		i.style.left = '-' + l + '%';

	}

}
const left_mover = () => {
	l = l - movePer;
	if (l <= 0) { l = 0; }
	for (const i of product) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
// span[1].onclick = () => { right_mover(); }
// span[0].onclick = () => { left_mover(); }

// setInterval(right_mover, 2000)

const showNav = () => {
	const div = document.querySelector('.text p');
	div.innerHTML = `
	<span>&#139;</span>
	<span>&#155;</span>
`
}
const productList = document.querySelectorAll(".product")

const setItemWithDots = (item, showDots) => {
	const itemPer = 1000 / item;
	const dot = document.getElementById('dots');
	if (!showDots) {

		dot.style.display = 'none';
	}

	let numberOfDots = Math.ceil(product.length / item) - 1;
	console.log(numberOfDots);
	while (numberOfDots >= 1) {
		const dot = document.createElement('div');
		dots.appendChild(dot);
		numberOfDots--;

	}



	productList.forEach(product => {
		product.style.minWidth = itemPer + 'px'
	})

}

const initializeSlider = (interval, nav, item, showDots) => {
	setItemWithDots(item, show
		
		Dots);
	if (nav) {
		showNav();
	}
	if (nav) {
		span[0].style.display = 'inline-block'
		span[0].onclick = left_mover;
		span[1].style.display = 'inline-block'
		span[1].onclick = right_mover;
	}
	setInterval(right_mover, interval)
}
 */