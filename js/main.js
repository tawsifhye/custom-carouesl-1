let isLoop = false;
let saveInterval;
let autoPlaySlide;
let autoplay = false;

const moveForward = () => {
	const newPage = parseInt($('#current_page').val()) + 1;
	if ($('.active_page').next('.page_link').length == 0 && isLoop) {

		goToPage(0);

	}
	else if ($('.active_page').next('.page_link').length == 1) {

		goToPage(newPage);
	}
}

const initializeSlider = (props) => {
	console.log(props);

	const itemsPerPage = props.item;
	const numberOfItems = $('.product').length;
	const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

	$('#current_page').val(0);
	$('#show_per_page').val(itemsPerPage);

	let navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
	let current_link = 0;
	while (numberOfPages > current_link) {
		navigation_html += '<a class="page_link" href="javascript:goToPage(' + current_link + ')" value="' + current_link + '">' + (current_link + 1) + '</a>';
		current_link++;
	}
	navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';

	$('#page_navigation').html(navigation_html);
	if (!props.nav) {
		$('.previous_link').css('display', 'none');
		$('.next_link').css('display', 'none');
	}
	if (!props.showDots) {
		$('.page_link').css('display', 'none');
	}
	$('#page_navigation .page_link:first').addClass('active_page');
	$('#slider-container').children().css('display', 'none');
	$('#slider-container').children().css('animation', props.animation);
	$('#slider-container').children().css('animation-duration', props.animationDuration);
	$('#slider-container').children().slice(0, itemsPerPage).css('display', 'block');

	if (props.loop) {
		isLoop = true;
	}

	if (props.interval) {
		autoplay = true
		saveInterval = props.interval;
		autoPlaySlide = setInterval(moveForward, props.interval);
	}

}


const previous = () => {
	const newPage = parseInt($('#current_page').val()) - 1;
	if ($('.active_page').prev('.page_link').length == true) {
		goToPage(newPage);
	}
}

const next = () => {
	if (autoplay) {
		clearInterval(autoPlaySlide);
		autoPlaySlide = setInterval(moveForward, saveInterval);
	}

	moveForward();

}


const goToPage = (pageNum) => {
	let itemsPerPage = parseInt($('#show_per_page').val())
	let startFrom = pageNum * itemsPerPage;
	let endOn = startFrom + itemsPerPage;
	$('#slider-container').children().css('display', 'none').slice(startFrom, endOn).css('display', 'block');
	$('.page_link[value=' + pageNum + ']').addClass('active_page').siblings('.active_page').removeClass('active_page');
	$('#current_page').val(pageNum);
}




